import React from 'react'
import { useEffect, useState } from 'react'

function Drinks() {
    const [Drinks, setDrinks] = useState([])

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

       function renderDrinks() {
        return Drinks.map(drink => {
            return (
                <tr key={drink.idDrink}>
                    <td><img src={drink.strDrinkThumb} alt={drink.strDrink} /></td>
                    <td>{drink.strCategory}</td>
                    <td>{drink.strIngredient1}</td>
                    <td>{drink.idDrink}</td>
                </tr>
            )
        })
    }
    return (
        <>
        <h1>Drinks</h1>
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