import {
    Center,
<<<<<<< HEAD
    Spacer
=======
    Switch,
    FormLabel
>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd
}

    from "@chakra-ui/react";
import Head from 'next/head'
import { useState } from "react";
import Layout from '../pages/cuerpo'
import MapViewI from '../components/MapView3Ida'
import MapViewV from '../components/MapView3Vuelta'


export default function linea3() {
<<<<<<< HEAD
    return (
    <Layout pageId="linea3">
    <Head>
        <title>Linea 1</title>
    </Head>
    <Center  height="700" bg='white.500' border='2px' borderColor='black' width='1630px'>
        
        <box >
            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24514.50543720537!2d-73.2512901452076!3d-39.822395484055136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x9615eef5ec0267f7%3A0xf01724bd8f41fb70!2sAv.%20Francia%2C%20Valdivia%2C%20Los%20R%C3%ADos!3m2!1d-39.8379073!2d-73.2277606!4m5!1s0x9615eddd95325425%3A0xc96ec6773e9cdb2d!2sUach%20-%20Independencia%2C%20Valdivia!3m2!1d-39.8061639!2d-73.2516591!5e0!3m2!1ses-419!2scl!4v1669333546861!5m2!1ses-419!2scl" width="1630" height="700"  allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
        </box>
        
        {estadoModal1 &&
        
        <div class="promos">  
=======
    const [estadoModal1, cambiarEstadomodal1] = useState(true);
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => { setIsEnabled(!isEnabled) }
    return (
        <Layout pageId="linea3">
            <Head>
                <title>Linea 3</title>
            </Head>
            <Center height="700" bg='white.500' width='1481px'>
>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd

                {isEnabled &&
                    <MapViewI />

                }
                {!isEnabled &&
                    <MapViewV />

                }
                <FormLabel
                    htmlFor='isChecked'
                    position="fixed"
                    top="226px"
                    left="30px"
                >Ida</FormLabel>

<<<<<<< HEAD
    </Layout>
)
=======

                <Switch colorScheme='red'
                    onChange={toggleSwitch}
                    checked={isEnabled}
                    label="Secondary"
                    position="fixed"
                    top="230px"
                    left="60px"
                    name="checkedB"
                />
                <FormLabel
                    htmlFor='isChecked'
                    position="fixed"
                    top="226px"
                    left="102px"
                >Vuelta</FormLabel>
                {estadoModal1 &&

                    <div class="promos">

                        <div class="promo scale">
                            <div class="cerrar" onClick={() => cambiarEstadomodal1(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1px" height="1px" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                            <div class="circulo"> 3 </div>
                            <div class="deal">
                                <span>LINEA</span>
                            </div>
                            <span class="price">
                                <div>Horario (Lun-Dom):</div>
                                <div>6:45 - 21:30</div>
                                <div>Precio TNE: 160$</div>
                                <div>Precio normal: 500$</div>
                            </span>


                            <img src="images/linea3.jpg" width='100%'></img>


                        </div>


                    </div>
                }
            </Center>


        </Layout>
    )
>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd
}