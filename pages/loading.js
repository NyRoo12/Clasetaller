import {
    Link
}
from "@chakra-ui/react";
import React from 'react';
//pagina de carga con gif//


export default function loading() {
    return (
        <Link href="inicio">
        <div class="pantalla">
            <img src="images/Kasus_1.gif" width="100%" height="100%" >

            </img>
            
        </div>
        </Link>
    )
}