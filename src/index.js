import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import './components/css/Header.css';
import App from './App';
import Quotes from './components/Quotes';
import Calculator from './components/Calculator';
import PageNotFound from './components/PageNotFound';

const routes = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: '/calculator',
    element: <Calculator />,
    errorElement: <PageNotFound />,
  },
  {
    path: '/quotes',
    element: <Quotes />,
    errorElement: <PageNotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <RouterProvider router={routes} />
  </>,
);

reportWebVitals();
