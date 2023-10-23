import React, { Fragment } from 'react';
import './components/components.css';
import { ParentDiv } from './components/ParentDiv';
import Form from './components/Form';

const App = () => {
    return (
        <Fragment>
            <ParentDiv>
                <ParentDiv style={{ backgroundColor: 'white' }}>
                    <Form />
                </ParentDiv>
            </ParentDiv>
        </Fragment>
    );
};

export default App;
