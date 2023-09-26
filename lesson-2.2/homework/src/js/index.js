import React from 'react';
import ReactDOM from 'react-dom/client';

import MAIN_COMPONENT from './components/main';
import SERVICES_COMPONENT from './components/services';
import ABOUT_COMPONENT from './components/about';
import TESTOMONIAL_COMPONENT from './components/testomonial';
import FOOTER_COMPONENT from './components/footer';

const root = (
    <div>
        {MAIN_COMPONENT}
        {SERVICES_COMPONENT}
        {ABOUT_COMPONENT}
        {TESTOMONIAL_COMPONENT}
        {FOOTER_COMPONENT}
    </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(root);
