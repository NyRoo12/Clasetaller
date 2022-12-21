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
            <img src="images/Kasus_1.gif" width="1330px" height="1330px" left="1000px">

            </img>
            
        </div>
        </Link>
    )
}