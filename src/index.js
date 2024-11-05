import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HoroscopeContext } from './Context/HoroscopeContext';

const Root = () => {
  return (
      <HoroscopeContext.Provider value={{ sign: "Virgo" }}>
        <App />
      </HoroscopeContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
