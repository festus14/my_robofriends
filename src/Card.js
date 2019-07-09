import React from 'react';
import './Card.css'

const Card = () => {
    return(
        <div className='card-container'>
            <img src='https://robohash.org/test?size=150x150' alt='robots' />
                <h2>Festus Omole</h2>
                <p>festusomle14@gmail.com</p>
        </div>
    );
}


export default Card;