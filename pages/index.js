import React from "react";
import Head from 'next/head'

export default function Index() {
    return (
        <div id="inicio">
            <Head>
                <title>KaSuS</title>
            </Head>
            <div id="inicio" > </div>
            <div class="tkasus">
                KASUS
            </div>
            
            <div class="teslogan">
                Tu mejor opción de visualización de rutas en Valdivia!
            </div>

            <box>
                <a href="/inicio" class="btn-flotanteInicio">Empezar </a>
            </box>

        </div>
    )
}
