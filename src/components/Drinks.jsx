import React from 'react'
import { useEffect } from 'react'

function Drinks() {
    useEffect(() => {
        fetch('http://localhost:3002/drinks')
        .then(response => response.json())
        .then(data => console.log(data))
    }, []
    )

    return (
        <>
        <h2>Drinks</h2>
        <table>
            <thead>
             <tr>

             </tr>
            </thead>
            <tbody>
               
            </tbody>
        </table>

        </>
    )
    }

export default Drinks