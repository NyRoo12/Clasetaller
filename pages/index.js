import {
    Link,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Center
}
from "@chakra-ui/react";
import React from 'react';
import { useState, useEffect} from "react";
import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Layout from '../pages/cuerpo'
//pagina de carga con gif//



export default function loading() {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {setLoading(false);}, 4300);
    }, []);

    return (

        <div id="pantalla">
            <div class="contenedor">
            <img src="images/KasusT.gif" loading="lazy" alt="…"></img>
            </div>
            {!loading && 
            
            <a class="botonInicio" href="/inicio" >empezar</a>
            }
        </div>
        
        
    )
}
