import React from 'react'
import { useEffect } from 'react'

function Drinks() {

    useEffect(() => {
        const fetchDrinks = async () => {
            const url = 'http://localhost:3002/drinks'
        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
        } catch (err) {
            console.log(err)
            return null;
        }
    }
    fetchDrinks()
    }
    , [])

    return (
        <>
        <h1>Drinks</h1>
        <table>
            <thead>
                <tr>
                    <th>Drink</th>
                    <th>category</th>
                    <th>Ingrediant</th>
                    <th>ID</th>
                    </tr>
            </thead>
            <tbody>
                {/*Drinks.map((drink) => {
                    return (
                        <tr key={drink.idDrink}>
                            <td>{drink.strDrink}</td>
                            <td>{drink.strCategory}</td>
                            <td>{drink.strIngredient1}</td>
                            <td>{drink.idDrink}</td>
                        </tr>
                    )
                })*/}
            </tbody>
        </table>
        </>
    )
    }

export default Drinks