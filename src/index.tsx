import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppThemeContextProvider } from './context/ThemeContext';
import { Header } from './components/Header/index';
import { ToastContainer } from 'react-toastify';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppThemeContextProvider>
    <React.StrictMode>
      <BrowserRouter>
      <ToastContainer />
        <Header />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </AppThemeContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
