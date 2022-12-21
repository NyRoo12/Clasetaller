import {
    Center,
    Spacer,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerFooter,
}
from "@chakra-ui/react";
import Head from 'next/head'
import Link from 'next/link'
import Script from "next/script";
import { useState } from "react";
import Layout from './cuerpo'

export default function inicio() {
    const[estadoModal1, cambiarEstadomodal1] = useState(true);
    return (
        <Layout pageId="lineaxd">
        <div class = 'fondo' >
            <img src='images\fondoKasus.png' />
        </div>

        <div class = 'cuadroblanco1'>
            muestra las lineas de micro que hay en valdivia
        </div>

        <div class = 'flechaL'   >
            <img src='images\flechaxd.png' />
        </div>

        <div class = 'texto1' >

        </div>

        <div class = 'flechaR' >
            <img src='images\flechaR.png' />
        </div>

        <div class = 'cuadroblanco2' >
            muestra informacion de las micros
        </div>

        <div class="promos">

            <div class="promo scale">
            <div class ="cerrar" onClick={()=> cambiarEstadomodal1(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1px" height="1px" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            <div class="circulo"> 1 </div>
            <div class="deal">
                <span>LINEA</span>
            </div>
            <span class="price">Horario: 06:00 - 19:00</span>


            <img src="images/linea1.jpg" width='100%'></img>

            </div>

        </div>
    </Layout>

    )
}