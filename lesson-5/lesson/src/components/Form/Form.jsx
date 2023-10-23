import React, { useRef, useState } from 'react';

const Form = () => {
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const nameInputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameInputRef.current.value);
        send(e.target[0].value);
        console.log(e.target[0].value);
    };

    const handleOnChange = () => {};
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    id="name"
                    type="text"
                    placeholder="Enter name ..."
                    onChange={handleOnChange}
                    ref={nameInputRef}
                />
                {/* <h1 style={{color: "red"}}>{error ? "To'gri yozilmagan" : null}</h1> */}
                <input
                    value={name}
                    type="password"
                    id="password"
                    // type={isShowPassword ? 'text' : 'password'}
                    className="input"
                    placeholder="Enter password ..."
                />
                <button>Submit</button>
            </form>
            <button onClick={() => setIsShowPassword((prev) => !prev)}>
                {isShowPassword ? "Ko'rsatish" : 'Yashirish'}
            </button>
        </>
    );
};
