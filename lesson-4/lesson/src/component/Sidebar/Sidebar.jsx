import React from 'react';
import './Sidebar.css';

const Sidebar = ({ title, items }) => (
    // const {}
    <div>
        <h3>{title ? title : ''}</h3>
        <ul>
            {items.map((item, idx) => (
                <React.Fragment>
                    <li key={idx}>{item}</li>
                </React.Fragment>
            ))}
        </ul>
    </div>
);

export default Sidebar;
