/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Navigation.css';
const Navbar = ({cartCount}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand cursor"  >Start Bootstrap</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="  collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" >
                        <li className="nav-item">
                            <a className="nav-link active cursor" aria-current="page" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link cursor">About</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                Shop
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" >All Product</a><hr /></li>
                                <li> <a className="dropdown-item">Popular Items</a></li>
                                <li><a className="dropdown-item" >New Arrivals here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark cart" type="submit">

                            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>
                        </button>
                    </form>

                </div>
            </div>
        </nav>

    )
};

export default Navbar;