
import{
    Button,
    box,
    pageId,
    data,
    children,
    Center
}

from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import { chakra, Grid } from "@chakra-ui/react";


const MainContentLayout=({children})=>{
    return(
        <b className="dsc-main-content">
        <div className="main">
            <a href="/linea9" class="btn-flotante" >Linea9</a>
            <a href="/linea2"  class="btn-flotante2" >Linea2</a>
            {children}
        </div>
        </b>
    )
}
export default MainContentLayout;