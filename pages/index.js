import React from 'react';
import MainContainerLayout from '../components/main-container.layout';
import HeaderLayout from '../components/header.layout'
import LeftNavLayout from '../components/left-nev.layout';
import FooterLayout from '../components/footer.layout';
import MainContentLayout from '../components/main-content.layout';
import Script from "next/script";
import { ChakraProvider } from "@chakra-ui/react";


function ola(){
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
export default ola;