import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';
import Header from "../Header/Header";

const Layout: FC = () => {
    return (
        <div className="wrapper bg-white rounded-xl p-16">
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Layout;