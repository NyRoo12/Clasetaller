import {
    Button,
    Link
}

from "@chakra-ui/react";
import React from 'react';
import Head from 'next/head';

export default function egg() {
    return (
        <div id="egg">
            <Link href="/inicio">
            <Button colorScheme="black">
                volver
            </Button>
            </Link>
            <Head>
                <title>EasterEgg</title>
            </Head>
            <div class="tituloegg">
                Acerca de Nosotros...
            </div>

            <div class="textoegg">
            Kasus surge como solución a una de las necesidades de los estudiantes, en específico a los recién ingresados en la universidad, nuevos estudiantes de diferentes partes del país (o de fuera inclusive) en donde valdivia es una ciudad desconocida y el saber como ir del hogar a la universidad o a comercios importantes es una de las primeras problemáticas que pueden presentar, por lo cual esta idea viene con el fin  de facilitar un poco la vida de los nuevos estudiantes en valdivia.
            </div>

            </div>
    )

}