import React from 'react';

const FooterComponent = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="title">Contact Us</div>
                <div className="wrapper d-flex">
                    <div className="forms">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <button></button>
                    </div>
                    <div className="info">
                        <div>
                            <i class="fa-solid fa-envelope"></i>test@gmail.com
                        </div>
                        <div>
                            <i class="fa-solid fa-phone"></i>(303) 555-0105
                        </div>
                        <div>
                            <i class="fa-solid fa-location-dot"></i>2715 Ash Dr. San Jose, South Dakota 83475
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom"></div>
        </footer>
    );
};

export default FooterComponent;
