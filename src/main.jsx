import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import { ThemeContextProvider } from './context/ThemeContext';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeContextProvider>
  </Provider>
);
