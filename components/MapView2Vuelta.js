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

    const center = useMemo(()=>({lat: -39.8239, lng: -73.2458}),[]);

    const options = {
        strokeColor: 'orange',
        strokeOpacity: 1,
        strokeWeight: 4,
        clickable: true,
    };

    const directionsService = new google.maps.DirectionsService();
    let [directions, setDirections] = useState("");

    const origin = { lat: -39.84992, lng: -73.23156 };
    const destination = {  lat: -39.77116, lng: -73.21999 };

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
                {
                    location: { lat:-39.8442, lng: -73.22809 }
                },{
                    location: { lat:-39.84292,lng: -73.228 }
                },{
                    location: { lat:-39.83811,lng: -73.22945 }
                },{
                    location: { lat:-39.83651,lng: -73.23723 } 
                },{
                    location: { lat:-39.83271,lng:-73.2393 } 
                },{
                    location: { lat:-39.83166,lng: -73.2377 } 
                },{
                    location: { lat:-39.82845,lng: -73.24671 } 
                },{
                    location: { lat:-39.81961,lng:-73.24437 } 
                },{
                    location: { lat:-39.8162, lng:-73.24677 }             
                },{
                    location: { lat:-39.81336,lng: -73.22204 } 
                },{
                    location: { lat:-39.81135,lng:-73.22406 } 
                },{
                    location: { lat:-39.80832,lng: -73.22112 } 
                },{
                    location: { lat:-39.77422,lng: -73.19461 } 
                }
            ]
        },
        (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                setDirections(result);
            } else {
                console.error('error fetching directions ${result}');
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

