import { React } from 'react';
import {Polyline, GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
import credentials from './credentials';
import { useState } from "react";
import { color } from '@chakra-ui/react';


export default function MapView() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: credentials.mapsKey,
    });
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;

}

function Map() {
    

    const center = { lat: -39.843094, lng: -73.228876};

    const onLoad = polyline => {
        console.log('polyline: ', polyline)
    };
    
    
    var path = [
        { lat: -39.86932955955784, lng: -73.18675730429622 },
        { lat: -39.867638, lng:-73.187790 },
        { lat: -39.866009, lng: -73.188481 },
        { lat: -39.864520, lng: -73.189777},
        { lat: -39.864130, lng: -73.190015},
        { lat: -39.857678, lng:  -73.191877},
        { lat: -39.857165, lng:  -73.191937},
        {lat:-39.856501, lng:-73.191345},
        {lat:-39.854556, lng:-73.189632},
        {lat:-39.841439, lng:-73.205767},
        {lat:-39.837168, lng:-73.199410},
        {lat:-39.836662, lng:-73.199717},
        {lat:-39.836591, lng:-73.199645},
        {lat:-39.836514, lng:-73.199649},
        {lat:-39.835359, lng:-73.200528},
        {lat:-39.837372, lng:-73.203473},
        {lat:-39.835281, lng:-73.205905},
        {lat:-39.839969, lng:-73.212591},
        {lat:-39.840355, lng:-73.213412},
        {lat:-39.840983, lng:-73.217538},
        {lat:-39.843235, lng:-73.217015},
        {lat:-39.845058, lng:-73.217155},
        {lat:-39.845449, lng:-73.217318},
        {lat:-39.848278, lng:-73.219822},
        {lat:-39.851913, lng:-73.223830},
        {lat:-39.852835, lng:-73.225740},
        {lat:-39.853847, lng:-73.227477},
        {lat:-39.852728, lng:-73.228816},
        {lat:-39.853031, lng:-73.229292},
        {lat:-39.854135, lng:-73.230178},
        {lat:-39.853534, lng:-73.231491},
        {lat:-39.853550, lng:-73.232352},
        {lat:-39.853268, lng:-73.232345},
        {lat:-39.851422, lng:-73.231963},
        {lat:-39.851348, lng:-73.231666},
        {lat:-39.851097, lng:-73.231479},
        {lat:-39.850820, lng:-73.231606},
        {lat:-39.850733, lng:-73.231776},
        {lat:-39.848123, lng:-73.231299},
        {lat:-39.845045, lng:-73.232034},
        {lat:-39.844338, lng:-73.228070},
        {lat:-39.843804, lng:-73.228219},
        {lat:-39.843601, lng:-73.227786},
        {lat:-39.842919, lng:-73.227997},
        {lat:-39.843009, lng:-73.228475},
        {lat:-39.839340, lng:-73.229551},
        {lat:-39.838729, lng:-73.229583},
        {lat:-39.838012, lng:-73.229455},
        {lat:-39.837512, lng:-73.234795},
        {lat:-39.837287, lng:-73.235543},
        {lat:-39.836345, lng:-73.237318},
        {lat:-39.833844, lng:-73.238198},
        {lat:-39.832726, lng:-73.239288},
        {lat:-39.831737, lng:-73.237631},
        {lat:-39.830224, lng:-73.239335},
        {lat:-39.829344, lng:-73.238402},
        {lat:-39.825605, lng:-73.232450},
        {lat:-39.825499, lng:-73.232179},
        {lat:-39.825001, lng:-73.228840},
        {lat:-39.823978, lng:-73.227562},
        {lat:-39.823327, lng:-73.228392},
        {lat:-39.822758, lng:-73.228860},
        {lat:-39.820340, lng:-73.229827},
        {lat:-39.819506, lng:-73.230332},
        {lat:-39.816365, lng:-73.235622},
        {lat:-39.813385, lng:-73.238765},
        {lat:-39.813178, lng:-73.239293},
        {lat:-39.812498, lng:-73.241353},
        {lat:-39.811885, lng:-73.245761},
        {lat:-39.811889, lng:-73.246837},
        {lat:-39.810959, lng:-73.252231},
        {lat:-39.810465, lng:-73.252096},
        {lat:-39.810173, lng:-73.252085},
        {lat:-39.808079, lng:-73.251219},
        {lat:-39.807750, lng:-73.251156},
        {lat:-39.807675, lng:-73.251108},
        {lat:-39.807500, lng:-73.251072},
        {lat:-39.807458, lng:-73.250993},
        {lat:-39.807391, lng:-73.250962},
        {lat:-39.807314, lng:-73.251005},
        {lat:-39.807286, lng:-73.251121},
        {lat:-39.807304, lng:-73.251186},
        {lat:-39.807224, lng:-73.251329},
        {lat:-39.807072, lng:-73.251334},
        {lat:-39.807017, lng:-73.251376},
        {lat:-39.806863, lng:-73.251690},
        {lat:-39.806956, lng:-73.251881},
        {lat:-39.806889, lng:-73.252023}

    ];

    


    const options = {
        strokeColor: 'red',
        strokeOpacity: 0.8,
        strokeWeight: 8,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: true,
        draggable: true,
        editable: false,
        visible: true,
        radius: 30000,
        extraMapTypes:null
    
    };


    return (
        <GoogleMap

            zoom={14}
            center={center}
            mapContainerClassName="map-container"
            mapTypeId='roadmap'
            markers={[{ lat: -39.843094, lng: -73.228876},{lat:-39.806889, lng:-73.252023}]}
        >
            <Polyline
                onLoad={onLoad}
                path={path}
                options={options}
            />
            <Marker 
            title="INICIO"
            icon={{
                
                path:
                "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
                fillColor: "yellow",
                fillOpacity: 0.9,
                scale: 2,
                strokeColor: "gold",
                strokeWeight: 2,
            }}
            position={{ lat: -39.86932955955784, lng: -73.18675730429622 }}
            animation="BOUNCE"
            />
            <Marker 
            label="FINAL"
            position={{lat:-39.806889, lng:-73.252023}}
            animation="DROP"
            />
        </GoogleMap>
        

    )
}

