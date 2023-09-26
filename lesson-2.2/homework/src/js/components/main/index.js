
import React from 'react';
import IMAGES from '../../data/images';

const MAIN_COMPONENT = (
    <main>
        <div className="container">
            <div className="logo">
                <img src={IMAGES.LOGO} alt="logo" loading="lazy" />
            </div>
            <div className="main-description">Lorem Ipsum is simply dummy</div>
            <h1>Lorem ipsum Lorem</h1>
            <button>Help Me</button>
        </div>
    </main>
);

export default MAIN_COMPONENT;
