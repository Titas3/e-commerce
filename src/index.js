import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Home from './pages/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Register from './componenets/Home/Register/Register';
import Login from './pages/login/login';
import Cart from './pages/Cart/Cart';
// import Register from './componenets/Home/Register/Register';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter >
  <Routes>
  <Route path='/Home' element={<Home />}></Route>
  <Route path='/register' element={<Register/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/cart' element={<Cart />}></Route>
  <Route path='/' element={<Register/>}></Route>
  </Routes>
  </BrowserRouter>
    // <Home />
    // <Register/>
  // </React.StrictMode>
);


