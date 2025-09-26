import { useContext, useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import {Link } from 'react-router-dom'
import UserContext from "../utils/UserContext"

const Header = () => {
    const [btnName, setBtnName] = useState("Login")

    const { loggedInUser} = useContext(UserContext);

    useEffect(() => {
        console.log('hello')
    }, [])

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
            <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/about" >About Us</Link></li>
                <li>
                    <Link to="/contact" >Contact Us</Link>
                </li>
                <li>Cart</li>
                <button className="login"
                onClick={() => btnName === "Login" 
                    ? setBtnName("LogOut") 
                    : setBtnName("Login")
                }
                >{btnName}</button>
                <li className="px-2">{loggedInUser}</li>
            </ul>
            </div>
        </div>
    )
}

export default Header