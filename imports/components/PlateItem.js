import React from 'react'

export default ({ name, price, discount }) => (
    <div>
        <p>{name}</p>
        <p>{price}</p>
        <p>{discount}</p>
    </div>
)