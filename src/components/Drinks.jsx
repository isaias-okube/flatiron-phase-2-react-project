import React, { useState, useEffect } from 'react';

function Drinks() {
    const [drinks, setDrinks] = useState([]);
    const [search, setSearch] = useState('');
    const [newDrink, setNewDrink] = useState({
        id: '',
        strDrink: '',
        strDrinkThumb: '',
        strCategory: '',
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
            <tr key={drink.id}>
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
                    id: '',
                    strDrink: '',
                    strDrinkThumb: '',
                    strCategory: '',
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
        <div>
            <form>
                <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Search for a drink"
                    value={search}
                    onChange={handleSearchChange}
                />
                <button type="button" onClick={filterDrinks}>
                    Search
                </button>
            </form>

            <form>
                <label htmlFor="strDrink">Name</label>
                <input
                    type="text"
                    id="strDrink"
                    name="strDrink"
                    value={newDrink.strDrink}
                    onChange={handleNewDrinkChange}
                />
                <label htmlFor="strDrinkThumb">Image</label>
                <input
                    type="text"
                    id="strDrinkThumb"
                    name="strDrinkThumb"
                    value={newDrink.strDrinkThumb}
                    onChange={handleNewDrinkChange}
                />
                <label htmlFor="strCategory">Category</label>
                <input
                    type="text"
                    id="strCategory"
                    name="strCategory"
                    value={newDrink.strCategory}
                    onChange={handleNewDrinkChange}
                />
                <button type="button" onClick={addNewDrink}>
                    Add New Drink
                </button>
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
        </div>
    );
}

export default Drinks;
