import React, { useState, useEffect } from 'react';

function Drinks() {
    const [drinks, setDrinks] = useState([]);
    const [search, setSearch] = useState('');
    const [newDrink, setNewDrink] = useState({
        name: '',
        image: '',
        category: '',
    });

    useEffect(() => {
        fetchDrinks();
    }, []);

    const fetchDrinks = async () => {
        const url = 'http://localhost:3002/drinks';
        try {
            const response = await fetch(url);
            const data = await response.json();
            setDrinks(data);
        } catch (err) {
            console.log(err);
        }
    };

    function filterDrinks() {
        return drinks.filter((drink) => {
            return drink.strDrink.toLowerCase().includes(search.toLowerCase());
        });
    }

    function renderDrinkDetails() {
        return filterDrinks().map((drink) => (
            <tr key={drink.strDrink}>
                <td>
                    <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                </td>
                <td>{drink.strDrink}</td>
                <td>{drink.strCategory}</td>
            </tr>
        ));
    }

    function handleSearchChange(event) {
        setSearch(event.target.value);
    }

    function addNewDrink() {
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDrink),
        };

        fetch('http://localhost:3002/drinks', configObj)
            .then((response) => response.json())
            .then((data) => {
                setDrinks([...drinks, data]);
                setNewDrink({
                    name: '',
                    image: '',
                    category: '',
                });
            });
    }

    function handleNewDrinkChange(event) {
        const { name, value } = event.target;
        setNewDrink({
            ...newDrink,
            [name]: value,
        });
    }

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Search for a drink"
                    onChange={handleSearchChange}
                />
                <button onClick={filterDrinks}>Search</button>
            </form>

            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={newDrink.name}
                    onChange={handleNewDrinkChange}
                />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    value={newDrink.image}
                    onChange={handleNewDrinkChange}
                />
                <label htmlFor="category">Category</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={newDrink.category}
                    onChange={handleNewDrinkChange}
                />
                <button type="button" onClick={addNewDrink}>Add New Drink</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>{renderDrinkDetails()}</tbody>
            </table>
        </>
    );
}

export default Drinks;
