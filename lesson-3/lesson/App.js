import React from 'react';
import ReactDOM from 'react-dom/client';
import ButtonJSX from './src/components/Button';
import Groups from './src/components/Groups';
import dataGroup from './src/data/data';

// const className = 'default';
// const children = (
//     <div>
//         <span>Test</span>
//         <span>Test</span>
//         <span>Test</span>
//     </div>
// );

// const props = { className, children };

// const headingJSX = <h1 {...props} />;
// // const heading = React.createElement('h1', { className: props.className }, props.children);

// // const heading = (className) => React.createElement('h1', { ...props, children });

// ReactDOM.createRoot(document.querySelector('#root')).render(headingJSX);

//===============>>

ReactDOM.createRoot(document.querySelector('#root')).render(
    <div>
        <ButtonJSX children={'hello'} />
        <div className="d-flex">
            <Groups data={dataGroup} />
        </div>
    </div>
);

// hohlagan qiymatni props sifatida bersak bo'ladi
// props uzi object bo'ladi <ButtonJSX children={'hello'} components={<ButtonJSX role={"ceo"} />}
