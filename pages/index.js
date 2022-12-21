import React from "react";
import Head from 'next/head'
// pagina de bienvenida//
export default function Index() {
    return (
        <div id="inicio">
            <Head>
                <title>KaSuS</title>
            </Head>
            
            <div class="tkasus">
                KASUS
            </div>
            
            <div class="teslogan">
                Tu mejor opción de visualización de rutas en Valdivia!
            </div>

            <box>
                <a href="/loading" class="btn-flotanteInicio">Empezar </a>
            </box>

        </div>
    )
}
