import { React, useState, useMemo } from 'react';
import { GoogleMap, useLoadScript, DirectionsRenderer } from '@react-google-maps/api';
import credentials from './credentials';

export default function MapView() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: credentials.mapsKey,
    });
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;

}

function Map() {

    const center = useMemo(() => ({ lat: -39.8239, lng: -73.2458 }), []);

    const options = {
        strokeColor: 'orange',
        strokeOpacity: 0.8,
        strokeWeight: 5,
        clickable: true,
    };

    const directionsService = new google.maps.DirectionsService();
    let [directions, setDirections] = useState("");

    const origin = {lat: -39.85031501784477, lng: -73.25048692682617};
    const destination = {lat: -39.8614174905826, lng : -73.17994232643707};

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
                {
                    location: {lat:-39.83955741281587, lng :-73.25749934007406},
                },{
                    location: {lat:  -39.834020844095406, lng: -73.25177641259316}
                },{
                    location: {lat : -39.82777721682891, lng :-73.24949799135989}
                },{
                    location: {lat: -39.81523164969856, lng : -73.2465197862152}
                },{
                    location: {lat: -39.83224895880537, lng: -73.21308753698194}
                },{
                    location: {lat: -39.83719244277259, lng : -73.20767225605566}
                },{
                    location: {lat: -39.8387212508593, lng : -73.20546228370924}
                },{
                    location: {lat: -39.83547143593973, lng: -73.20067586907227}
                },{
                    location: {lat:  -39.84307157497963, lng : -73.2059678327391}
                },{
                    location: {lat: -39.846321096530154, lng: -73.20980706641382}
                },{
                    location: { lat: -39.847323150616766, lng: -73.20852025302482}
                }
            ]
        },
        (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                setDirections(result);
            } else {
                console.error(`error fetching directions ${result}`);
            }
        },

    );

    return (
        <GoogleMap

            zoom={14}
            center={center}
            mapContainerClassName="map-container"
            mapTypeId='roadmap'
        >

            <DirectionsRenderer
                directions={directions}
                options={{
                    polylineOptions: { options },
                    markerOptions: { opacity: 0.0 }
                }}

            />

        </GoogleMap>
    )
}