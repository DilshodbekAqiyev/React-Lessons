import React from 'react';
import ReactDOM from 'react-dom/client';
import MainComponent from './components/main';
import ServicesComponent from './components/services';
import AboutComponent from './components/about';
import TestomonialComponent from './components/testomonial';
import FooterComponent from './components/footer';

const root = (
    <div>
        <MainComponent />
        <ServicesComponent />
        <AboutComponent />
        <TestomonialComponent />
        <FooterComponent />
    </div>
);

ReactDOM.createRoot(document.querySelector('#root')).render(root);
