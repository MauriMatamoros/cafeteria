import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/plate">PlateForm</Link>
        <Link to="/plateList">PlateList</Link>
        <Link to="/options">OptionsForm</Link>
    </div>
) 