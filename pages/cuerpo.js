import React from 'react';
import MainContainerLayout from '../components/main-container.layout';
import HeaderLayout from '../components/header.layout'
import FooterLayout from '../components/footer.layout';
import MainContentLayout from '../components/main-content.layout';
import Head from 'next/head'

//estructura de la pagina//
const Comienzo = ({ children }) => {
    return (

        <MainContainerLayout >
            <Head>
                <title>KaSuS</title>
            </Head>
            <HeaderLayout />

            <MainContentLayout>
                {children}
            </MainContentLayout>
            <FooterLayout />
        </MainContainerLayout>

    );
}
export default Comienzo;