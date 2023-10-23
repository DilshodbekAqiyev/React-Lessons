import React from 'react';
import Sidebar from './Sidebar/Sidebar';
// import Companies from './companies/Companies';
// import { companiesData } from '../data';

// const HeadingComponent = (props) => {
//     return <h1 className={props.class || 'defaultHeadingClass'}>{props.children ? props.children : 'Salom Dunyo'}</h1>;
// };

export const App = () => {
    const clicked = function () {
        console.log('clicked');
    };

    return (
        <>
            {/* {<HeadingComponent class="headingRed" />} */}
            {/* <div className="sidebar">
            <Sidebar
                title="JavaScript Tutorial"
                items={['Javascript Introduction', 'Javascript Example', 'External JavaScript']}
            />
            <Sidebar
                title="JavaScript Basics"
                items={['JS Comments', 'JS Variable', 'JS Global Variable', 'JS Data Types']}
            />
            <Sidebar
                title="JavaScript Tutorial"
                items={['Javascript Introduction', 'Javascript Example', 'External JavaScript']}
            />
        </div> */}

            <button onClick={clicked} id="btn">
                Click me
            </button>
        </>
    );
};
