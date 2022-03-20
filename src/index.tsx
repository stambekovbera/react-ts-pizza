import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {persistor, store} from "./store/store";

import Layout from "./components/Layout/Layout";
import Home from "./page/Home";


import "./scss/index.scss"
import {PersistGate} from "redux-persist/integration/react";
import Cart from "./page/Cart";
import NotFoundPage from "./page/NotFoundPage";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<div>Загрузка...</div>}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="cart" element={<Cart/>}/>
                        <Route path='notfound' element={<NotFoundPage/>}/>
                        <Route path="*" element={<Navigate to={'/notfound'}/>}/>
                    </Route>
                </Routes>
            </PersistGate>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);