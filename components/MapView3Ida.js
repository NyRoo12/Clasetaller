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

    const origin = {lat : -39.86141500433953, lng : -73.18000761623581};
    const destination = {lat: -39.85022487640167, lng: -73.2505277823172};

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: 
            [
                {
                    location: {lat : -39.86141500433953, lng : -73.18000761623581},
                }, {
                    location: { lat: -39.84736218636556, lng : -73.20679648278971}
                }, {
                    location: { lat: -39.84712323001791, lng : -73.20911730846548}
                }, {
                    location : {lat: -39.843338120831184, lng : -73.20575649009275}
                },{
                    location : {lat: -39.8428299069311, lng: -73.20409053184467}
                },{
                    location: {lat: -39.83716793811233, lng: -73.19940013245599}
                },{
                    location : {lat: -39.83535759842975, lng: -73.20052794221559}
                },{
                    location: {lat: -39.83888888058487, lng: -73.20570781336586}
                },{
                    location: {lat: -39.837908454215295, lng:-73.20969699956481}
                },{
                    location: {lat: -39.812525832514275, lng:-73.24136844550911}
                },{
                    location: {lat: -39.81353239809163, lng: -73.24165129073681}
                },{
                    location : {lat: -39.85090649112159, lng: -73.25086644495661}
                },{
                    location: { lat: -39.85118682990802, lng: -73.25066805243635}
                },{
                    location: {lat: -39.852669926332396, lng: -73.24828485933482}
                },{
                    location: {lat: -39.850817147243156, lng: -73.24625278006268}
                },{
                    location: {lat: -39.84887011908891, lng: -73.24939160552441}
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