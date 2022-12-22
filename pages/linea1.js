import {
    Center,
}
from "@chakra-ui/react";
import Head from 'next/head'
import { useState } from "react";
import Layout from '../pages/cuerpo'
import MapView from '../components/MapViewPrueba';
import MostarLineas from '../components/MapViewPrueba';



export default function linea1() {
    const[estadoModal1, cambiarEstadomodal1] = useState(true);
    return (
    <Layout pageId="linea1">
    <Head>
        <title>Linea 1</title>
        
    </Head>

    <Center  height="700" bg='white.500' border='2px' borderColor='black' width='1481px'>
        
        <MapView/> 
        {estadoModal1 &&
        
        <div class="promos">  
            
            <div class="promo scale">
            <div class ="cerrar" onClick={()=> cambiarEstadomodal1(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1px" height="1px" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <pat d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            
            <div class="circulo"> 1 </div>
            <div class="deal">
                <span>LINEA</span>
            </div>
            
            <span class="price">
            <div>Horario (Lun-Dom):</div>
            <div>06:45 - 21:45</div>
            <div>Precio TNE: 160$</div>
            <div>Precio normal: 500$</div>
            
            </span>
            
            <img src="images/linea1.jpg" width='100%'></img>
            
            </div>
            
            <div class="img1">aaa</div>
        </div>
        }
        
        </Center>
        

    </Layout>
)
}
