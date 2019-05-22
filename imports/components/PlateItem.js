import React from 'react'
import { Link } from 'react-router-dom'

export default ({ _id, name, price, discount }) => (
    <div>
        <Link to={`/plates/edit/${_id}`}>{name}</Link>
        <p>{price}</p>
        <p>{discount}</p>
    </div>
)