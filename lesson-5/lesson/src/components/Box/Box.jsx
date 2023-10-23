import './Box.css';

function Box({ size = '', ...otherProps }) {
    return <div className={`box ${size}`} {...otherProps} />;
}

export default Box;
