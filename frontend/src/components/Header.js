import { useContext, useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import {Link } from 'react-router-dom'
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"

const Header = () => {
    const [btnName, setBtnName] = useState("Login")

    const { loggedInUser} = useContext(UserContext);

    useEffect(() => {
        console.log('hello')
    }, [])


    // Subscribing to the store using a Selector from react-redux
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

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
                <li className="px-4 font-bold text-2xl">
                <Link to="/cart" >Cart - ({cartItems.length} items) </Link>

                </li>
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