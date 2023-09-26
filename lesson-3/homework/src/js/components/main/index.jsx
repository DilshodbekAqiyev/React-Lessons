import React from 'react';
import IMAGES from '../../data/images';

const MainComponent = () => {
    return (
        <main>
            <div className="container">
                <div className="logo">
                    <img src={IMAGES.LOGO} alt="Company Logo" loading="lazy" />
                </div>
                <div className="main-description">Lorem Ipsum is simply dummy</div>
                <h1>Lorem ipsum Lorem</h1>
                <button>Click Me</button>
            </div>
        </main>
    );
};

export default MainComponent;
