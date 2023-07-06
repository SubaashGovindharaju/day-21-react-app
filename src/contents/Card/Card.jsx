import React, { useState } from "react";

import styles from './Card.module.css';

const Card = ({ product, price, star, stricPrice, badge, button, buttonAdd, buttonRemove, addTocartlist, removeFromcartlist, view }) => {
    const [cartItem, setCardItem] = useState(false);
    const handleCardItem = () => {
        if (cartItem) {
            setCardItem(false);
            removeFromcartlist();

        } else {
            setCardItem(true);
            addTocartlist();

        }
    }
    const viewButtons = () => {
        if (view) {
            return (
                <button className="btn btn-outline-dark mt-auto" >
                    {button}
                </button>
            )
        }
        else {
            return (

                <button className="btn btn-outline-dark mt-auto" onClick={handleCardItem}>
                    {cartItem ? buttonRemove : buttonAdd}
                </button>
            )
        }
    }
    return (

        <div className={` ${styles.colm} col mb-5  `}>
            <div className={`  card h-100`}>
                <div>
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    {badge && <span className={`badge ${styles.sale}`}>Sale</span>}
                </div>
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{product}</h5>
                        <div>
                            {star && <i className="fa-solid fa-star" style={{ color: "#ffd700" }}></i>}
                            {star && <i className="fa-solid fa-star" style={{ color: "#ffd700" }}></i>}
                            {star && <i className="fa-solid fa-star" style={{ color: "#ffd700" }}></i>}
                            {star && <i className="fa-solid fa-star" style={{ color: "#ffd700" }}></i>}
                            {star && <i className="fa-solid fa-star" style={{ color: "#ffd700" }}></i>}
                        </div>
                        <span className={styles.strike}>{stricPrice}</span>
                        {price}

                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">

                        {viewButtons()}

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Card;