import React from 'react';

const Cards = ({ icon, title, desc }) => {
    return (
        <>
            <div className="box">
                <i class={icon}></i>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </>
    );
};

export default Cards;
