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
import Layout from '../pages/index'


    function clickCerrar(){
        document.getElementById("ventana").style.display="none";
    }



export default function linea1() {
    const[estadoModal1, cambiarEstadomodal1] = useState(true);
    return (
    <Layout pageId="linea2">
    <Head>
        <title>Linea 1</title>
    </Head>
    <Center  height="700" bg='white.500' border='2px' borderColor='black' width='1481px'>
        
        <box >
            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24061.16525358198!2d-73.23897385001462!3d-39.83157661485098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x9615ee9ff311985f%3A0xc0a003eae97d725f!2sAv.%20Balmaceda%2C%20Valdivia%2C%20Los%20R%C3%ADos!3m2!1d-39.8073766!2d-73.20918979999999!4m5!1s0x9615ee4bc884f601%3A0xe3444bee10bfd1f!2zSW5nLiBSYcO6bCBTw6FleiBTw6FleiwgVmFsZGl2aWEsIExvcyBSw61vcw!3m2!1d-39.850179!2d-73.2501039!5e0!3m2!1ses-419!2scl!4v1668395023561!5m2!1ses-419!2scl" width="1481" height="700" allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
        </box> 
        
        {estadoModal1 &&
        
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
            
            <span class="price">
            <div>Horario (lun-vier):</div>
            <div>06:00 - 19:00</div>
            <div>Horario (sab-dom):</div>
            <div>06:00 - 19:00</div>
            
            <div>Precio TNE: 160$</div>
            <div>Precio normal: 500$</div>
            
            </span>
            
            <img src="images/linea1.jpg" width='100%'></img>

            
            </div>
            
            
        </div>
        
        }
        
        </Center>
        <br></br>
        <box >
            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24061.16525358198!2d-73.23897385001462!3d-39.83157661485098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x9615ee9ff311985f%3A0xc0a003eae97d725f!2sAv.%20Balmaceda%2C%20Valdivia%2C%20Los%20R%C3%ADos!3m2!1d-39.8073766!2d-73.20918979999999!4m5!1s0x9615ee4bc884f601%3A0xe3444bee10bfd1f!2zSW5nLiBSYcO6bCBTw6FleiBTw6FleiwgVmFsZGl2aWEsIExvcyBSw61vcw!3m2!1d-39.850179!2d-73.2501039!5e0!3m2!1ses-419!2scl!4v1668395023561!5m2!1ses-419!2scl" width="1481" height="700" allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
        </box> 

    </Layout>
)
}
