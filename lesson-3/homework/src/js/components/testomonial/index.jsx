import React from 'react';
import IMAGES from '../../data/images';

const TestomonialComponent = () => {
    return (
        <section className="testomonial">
            <div className="title">Testymonials</div>
            <div className="container">
                <div className="testomonial-wrapper d-grid">
                    <div className="testomonial-box">
                        <div className="tes-image">
                            <img src={IMAGES.USER_LOGO} alt="user" loading="lazy" />
                        </div>
                        <div className="tes-text">
                            <h4>Courtney Henry</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </p>
                            <div className="user-star">⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                    <div className="testomonial-box">
                        <div className="tes-image">
                            <img src={IMAGES.USER_LOGO} alt="user" loading="lazy" />
                        </div>
                        <div className="tes-text">
                            <h4>Courtney Henry</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </p>
                            <div className="user-star">⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                </div>
                <div className="testomonial-wrapper d-grid">
                    <div className="testomonial-box">
                        <div className="tes-image">
                            <img src={IMAGES.USER_LOGO} alt="user" loading="lazy" />
                        </div>
                        <div className="tes-text">
                            <h4>Courtney Henry</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </p>
                            <div className="user-star">⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                    <div className="testomonial-box">
                        <div className="tes-image">
                            <img src={IMAGES.USER_LOGO} alt="user" loading="lazy" />
                        </div>
                        <div className="tes-text">
                            <h4>Courtney Henry</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </p>
                            <div className="user-star">⭐⭐⭐⭐⭐</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestomonialComponent;
