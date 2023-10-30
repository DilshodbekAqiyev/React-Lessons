// import {
//   // useCallback,
//   useMemo,
//   useState,
// } from 'react';
// import ChildComponent from './components/ChildComponent';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   const [count10, setCound10] = useState(0);

//   // const add = useCallback(() => {
//   //   console.log('hello world');
//   // }, []);

//   // const add = () => {
//   //   console.log('hello world');
//   // };

//   const add = useMemo(() => {
//     for (let i = 0; i < 1000000000; i++) {
//       //og'ir jarayon
//     }
//   }, [count10]);

//   return (
//     <>
//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           setCount((prev) => prev + 1);
//         }}
//       >
//         +
//       </button>
//       <button
//         onClick={() => {
//           setCount((prev) => prev - 1);
//         }}
//       >
//         -
//       </button>
//       <br />
//       <br />
//       <br />
//       <h1>{count10}</h1>
//       <button
//         onClick={() => {
//           setCound10((prev) => prev + 1);
//         }}
//       >
//         +
//       </button>
//       <button
//         onClick={() => {
//           setCound10((prev) => prev - 1);
//         }}
//       >
//         -
//       </button>
//       <br />
//       <br />
//       <br />
//       <h1>{add}</h1>
//       {/* <ChildComponent add={add} /> */}
//     </>
//   );
// }

// export default App;

import { useReducer } from 'react';
function reducer(state, action) {
  // const { payload, type, } = action;

  // switch (type) {
  //   case 'INC':
  //     return state + payload;
  //   case 'DEC':
  //     return state - payload;
  //   case 'DIV':
  //     return state / payload;
  //   case 'MUL':
  //     return state * payload;
  //   default:
  //     break;
  // }

  const { secondInput, type } = action;

  switch (type) {
    case 'INC':
      return state + secondInput;
    case 'DEC':
      return state - secondInput;

    case 'DIV':
      return state / secondInput;
    case 'MUL':
      return state * secondInput;

    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const abc = (type) => {
    dispatch({
      // payload: 10,
      type,
    });
  };
  console.log(state.firstInput);
  return (
    <div>
      <h1>{state}</h1>
      <input
        type='number'
        value={state.firstInput}
        placeholder='first'
        onChange={(e) => (state.firstInput = e.target.value)}
      />
      <br />
      <br />
      <input
        type='number'
        value={state.secondInput}
        placeholder='second'
        onChange={(e) => (state.secondInput = e.target.value)}
      />
      <div>
        {console.log(state.firstInput)}
        <button onClick={() => abc('INC')}>+</button>
        <button onClick={() => abc('DEC')}>-</button>
        <button onClick={() => abc('DIV')}>/</button>
        <button onClick={() => abc('MUL')}>*</button>
      </div>
    </div>
  );
};

export default App;
