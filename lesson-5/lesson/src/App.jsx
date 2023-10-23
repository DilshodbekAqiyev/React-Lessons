import React from 'react';
import Box from './components/Box/Box';
import Accardion from './components/Accordion/Accardion';

const App = () => {
    return (
        <>
            {/* <Box size="box-small" style={{ color: 'blue' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, doloribus?
            </Box>
            <Box size="box-medium" style={{ backgroundColor: 'greenyellow' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, doloribus?
            </Box>
            <Box size="box-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, doloribus?</Box> */}

            <Accardion />
            <Accardion />
            <Accardion />
        </>
    );
};

export default App;
