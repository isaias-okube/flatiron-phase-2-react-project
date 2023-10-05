import { useEffect, useState } from 'react'

function Drinks() {
    const [Drinks, setDrinks] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchDrinks = async () => {
            const url = 'http://localhost:3002/drinks'
        try {
            const response = await fetch(url)
            const data = await response.json()
            setDrinks(data)
        } catch (err) {
            console.log(err)
            return null;
        }
    }
    fetchDrinks()
    }
    , [])

    function filterDrinks() {
        return Drinks.filter(drink => {
            return drink.strDrink.toLowerCase().includes(search.toLowerCase())
        })
    }

function renderDrinks() {
    return filterDrinks().map(drink => {
        return (
            <tr key={drink.idDrink}>
                <td><img src={drink.strDrinkThumb} alt={drink.strDrink} /></td>
                <td>{drink.strCategory}</td>
                <td>{drink.strIngredient1}</td>
                <td>{drink.idDrink}</td>
            </tr>
        )
    })}

    function handleSearchChange(event) {
        setSearch(event.target.value)
    }

    return (
        <>
        <h1>Drinks</h1>
        <form>
            <label htmlFor="search">Search</label>
            <input 
              type="text"
                id="search"
                name="search"
              placeholder='Search for a drink' 
              onChange={handleSearchChange}
              />
            <button type="submit">Submit</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Category</th>
                    <th>Ingrediant</th>
                    <th>ID</th>
                    </tr>
            </thead>
            <tbody>
                {renderDrinks()}
            </tbody>
        </table>
        </>
    )
    }

export default Drinks