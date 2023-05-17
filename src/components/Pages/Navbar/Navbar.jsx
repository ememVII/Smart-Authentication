import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

export default function Navbar(props) {
return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary ${classes.shadow}`}>
            <div className="container-fluid">
            <Link className="navbar-brand" to={'home'}>
                Smart Auth
            </Link>
            <button
                className={`navbar-toggler ${classes.burgerIcon}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {props.token ?
                <>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={'home'}>
                    Home
                    </Link>
                </li>
                <li className="nav-item">
                    <span className={`${classes.logOut} nav-link`} onClick={props.onLogOut}>Log Out</span>
                </li> 
                </> : 
                <>
                <li className="nav-item">
                    <Link className="nav-link" to={'register'}>
                    Register
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link" to={'login'}>
                    Login
                    </Link>
                </li>
                </> }
                </ul>

            </div>
            </div>
        </nav>
)
}
