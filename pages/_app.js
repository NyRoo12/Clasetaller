import React from 'react';
import loco from './loco';
import "../styles/style.css";
//import "../components/scss/layout.scss";
//import PublicRoutes from './routes/pulic.routes';
import MainContainerLayout from '../components/main-container.layout';
import HeaderLayout from '../components/header.layout'
import LeftNavLayout from '../components/left-nev.layout';
import FooterLayout from '../components/footer.layout';
import MainContent from '../components/main-content.layout';
import MainContentLayout from '../components/main-content.layout';
import Script from "next/script";

function app(){
    return(
        <MainContainerLayout >
            <HeaderLayout/>
            <LeftNavLayout/>
            <MainContentLayout>
            {/*<pivateRoutes props={props}/> */}
            </MainContentLayout>
            <FooterLayout/>
        </MainContainerLayout>
        

    );
}
export default app;