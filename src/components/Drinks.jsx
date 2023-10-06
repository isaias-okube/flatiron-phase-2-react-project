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

function renderDrinkDetails() {
    return filterDrinks().map(drink => {
        return (
            <tr key={drink.strDrink}>
                <td><img src={drink.strDrinkThumb} /></td>
                <td>{drink.strDrink}</td>
                <td>{drink.strCategory}</td>
                
            </tr>
        )
    })}

    function handleSearchChange(event) {
        setSearch(event.target.value)
    }

    return (
        <>
        <form>
            <input 
              type="text"
                id="search"
                name="search"
              placeholder='Search for a drink' 
              onChange={handleSearchChange}
              />
            <button onClick={filterDrinks}>Search</button>
      
        </form>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    </tr>
            </thead>
            <tbody>
                {renderDrinkDetails()}
            </tbody>
        </table>
        </>
    )
    }

export default Drinks

// import React, { useState } from 'react';

// function Drinks() {
//   const [drink, setDrink] = useState(null);

//   const fetchRandomDrink = async () => {
//     const url = 'http://localhost:3002/randomDrink';
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setDrink(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const renderDrinkDetails = () => {
//     if (drink) {
//       return (
//         <div>
//           <h2>{drink.strDrink}</h2>
//           <p>Category: {drink.strCategory}</p>
//           <p>Ingredient: {drink.strIngredient}</p>
//           <p>ID: {drink.idDrink}</p>
//           <img src={drink.strDrinkThumb} alt={drink.strDrink} />
//         </div>
//       );
//     } else {
//       return <p>No drink selected. Click the button to fetch a random drink.</p>;
//     }
//   };

//   return (
//     <>
//       <button onClick={fetchRandomDrink}>Fetch Random Drink</button>
//       {renderDrinkDetails()}
//     </>
//   );
// }

// export default Drinks;
