import React from 'react';
import IMAGES from '../../data/images';

const SERVICES_COMPONENT = (
    <section className="services">
        <div className="container">
            <div className="title">Services</div>
            <div className="wrapper d-flex">
                <div className="box">
                    <div className="box-image">
                        <img src={IMAGES.SERVICES_1} alt="image" loading="lazy" />
                    </div>
                    <div className="box-text">
                        <h4 className="box-title">Lorem Ipsum</h4>
                        <p className="box-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        </p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-image">
                        <img src={IMAGES.SERVICES_2} alt="image" loading="lazy" />
                    </div>
                    <div className="box-text">
                        <h4 className="box-title">Lorem Ipsum</h4>
                        <p className="box-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        </p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-image">
                        <img src={IMAGES.SERVICES_3} alt="image" loading="lazy" />
                    </div>
                    <div className="box-text">
                        <h4 className="box-title">Lorem Ipsum</h4>
                        <p className="box-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-center">
                <button>Help me</button>
            </div>
            <div className="title">About Us</div>
        </div>
    </section>
);

export default SERVICES_COMPONENT;
