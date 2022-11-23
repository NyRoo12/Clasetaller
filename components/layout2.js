import Head from "next/head";
import Link from "next/link";
import ViewCount from "../components/viewCount";
import React, { useState } from "react";

const Layout = ({ children, pageId }) => {



return (
    <div className="a" >
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ejemplo de sitio web con menú" />
    </Head>
    <header className="menu" >
        <Link href="/linea1">
        <a
            className={pageId === "linea1" ? "currentPage" : ""}
            
        >
            Linea 4
        </a>
        </Link>
        <Link href="/linea2">
        <a
            className={pageId === "linea2" ? "currentPage" : ""}
            
        >
            linea
        </a>
        </Link>
        
    </header>
    <main>{children}</main>
    </div>
);
};
export default Layout;
