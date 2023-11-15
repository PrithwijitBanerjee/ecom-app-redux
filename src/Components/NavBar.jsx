import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <a className="navbar-brand text-white" href="#!">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active active">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link text-white" to='/cart'>Cart</Link>
                        </li>

                    </ul>

                </div>
            </nav>

        </>
    )
}

export default NavBar