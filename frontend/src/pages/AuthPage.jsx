import React from "react";

import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import Auth from "../components/Auth/Auth";

const AuthPage = () => {
    return (
        <React.Fragment>
            <Header />
           <Auth/>
            <Footer />
        </React.Fragment>
    );
};

export default AuthPage;