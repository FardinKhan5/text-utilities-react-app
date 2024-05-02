import React from 'react'
import logoText from '../logoText.png'
import {Link} from "react-router-dom"
export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary shadow bg-${props.mode.theme}`} data-bs-theme={`${props.mode.theme}`}>
            <div className="container-fluid">
                <img src={logoText} alt="Logo" width="30" height="24" className="d-inline-block align-text-top me-2 bg-light" />
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className={`form-check-label text-${props.mode.theme === "light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">{props.mode.message} </label>
                    </div>
                </div>

            </div>
        </nav>

    )
}
