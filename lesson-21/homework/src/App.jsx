import { useReducer, useEffect } from 'react';

const API_BASE_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1';
const API_VERSION = 'latest';

const initialState = {
  fromCurrency: 'USD',
  toCurrency: 'EUR',
  inputValue: 1,
  currencies: {},
  conversionResult: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_FROM_CURRENCY':
      return { ...state, fromCurrency: action.payload };
    case 'SELECT_TO_CURRENCY':
      return { ...state, toCurrency: action.payload };
    case 'SET_INPUT_VALUE':
      return { ...state, inputValue: action.payload };
    case 'SET_CURRENCIES':
      return { ...state, currencies: action.payload };
    case 'SET_CONVERSION_RESULT':
      return { ...state, conversionResult: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const endpoint = 'currencies.min.json';
    fetch(`${API_BASE_URL}/${API_VERSION}/${endpoint}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_CURRENCIES', payload: data });
      })
      .catch((error) => {
        console.error('Error fetching currency data:', error);
      });
  }, []);

  const handleFromCurrencyChange = (e) => {
    dispatch({ type: 'SELECT_FROM_CURRENCY', payload: e.target.value });
  };

  const handleToCurrencyChange = (e) => {
    dispatch({ type: 'SELECT_TO_CURRENCY', payload: e.target.value });
  };

  const handleInputChange = (e) => {
    dispatch({ type: 'SET_INPUT_VALUE', payload: e.target.value });
  };

  const handleEnterPress = (e) => {
    if (e.key == 'Enter') {
      handleConvert();
    }
  };

  const handleConvert = () => {
    const fromCurrency = state.fromCurrency;
    const toCurrency = state.toCurrency;
    const inputValue = state.inputValue;

    const endpoint = `currencies/${fromCurrency}/${toCurrency}.json`;

    fetch(`${API_BASE_URL}/${API_VERSION}/${endpoint}`)
      .then((response) => response.json())
      .then((data) => {
        const rate = data[toCurrency];
        if (!isNaN(rate)) {
          const convertedValue = inputValue * rate;
          const result = `${(+inputValue).toLocaleString(
            'en-US'
          )} ${fromCurrency.toUpperCase()} ⏭️ ${convertedValue.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} ${toCurrency.toUpperCase()}`;
          dispatch({ type: 'SET_CONVERSION_RESULT', payload: result });
        } else {
          dispatch({
            type: 'SET_CONVERSION_RESULT',
            payload: 'Invalid conversion rate. Please check the currency codes.',
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching currency data:', error);
      });
  };

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <h1 className='text-4xl text-center mb-5'>Currency Converter</h1>
      <div className='flex flex-col gap-5'>
        <div className='flex justify-between gap-5'>
          <div className='w-1/2'>
            <label htmlFor='from' className='mb-2 text-sm font-medium text-gray-900'>
              From:
            </label>
            <select
              id='from'
              onChange={handleFromCurrencyChange}
              value={state.fromCurrency}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5'
            >
              {Object.entries(state.currencies)?.map(([currency, name]) => (
                <option key={currency} value={currency}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className='w-1/2'>
            <label htmlFor='to' className='mb-2 text-sm font-medium text-gray-900'>
              To:
            </label>
            <select
              id='to'
              onChange={handleToCurrencyChange}
              value={state.toCurrency}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5'
            >
              {Object.entries(state.currencies)?.map(([currency, name]) => (
                <option key={currency} value={currency}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor='input' className='mb-2 text-sm font-medium text-gray-900'>
            Input:
          </label>
          <input
            type='number'
            id='input'
            value={state.inputValue}
            onChange={handleInputChange}
            onKeyDown={handleEnterPress}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5'
          />
        </div>
        <div className='text-center'>
          <button
            onClick={handleConvert}
            className='bg-blue-500 text-white rounded-lg py-2 w-3/4 mx-auto hover:bg-blue-600 focus:outline-none'
          >
            Convert
          </button>
        </div>
      </div>
      <div className='mt-5 text-center text-xl'>{state.conversionResult && <h4>{state.conversionResult}</h4>}</div>
    </div>
  );
}

export default App;
