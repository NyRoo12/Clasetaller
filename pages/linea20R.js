import {
    Center,
    Spacer
}
from "@chakra-ui/react";
import Head from 'next/head'
import Link from 'next/link'
import { useState } from "react";
import Layout from '../pages/cuerpo'
import MapView from '../components/MapView'


export default function linea20() {
    const[estadoModal1, cambiarEstadomodal1] = useState(true);
    return (
    <Layout pageId="linea20">
    <Head>
        <title>Linea 20</title>
    </Head>
    <Center  height="700" bg='white.500'  width='1481px'>
        
    <MapView/> 

        {estadoModal1 &&
        
        <div class="promos">  

            <div class="promo scale">
            <div class ="cerrar" onClick={()=> cambiarEstadomodal1(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1px" height="1px" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            <div class="circulo2" > 20 </div>
            <div class="deal">
                <span>LINEA</span>
            </div>
            <span class="price">
            <div>Horario (Lun-Dom):</div>
            <div>7:00 - 21:30</div>
            <div>Precio TNE: 160$</div>
            <div>Precio normal: 500$</div>
            </span>

            
            <img src="images/linea20.jpg" width='100%'></img>

            
            </div>
            

        </div>
        }
        </Center>

    </Layout>
)
}