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
        strokeColor: 'red',
        strokeOpacity: 0.8,
        strokeWeight: 5,
        clickable: true,
    };

    const directionsService = new google.maps.DirectionsService();
    let [directions, setDirections] = useState("");

    const origin = { lat:-39.85034, lng:-73.25053 };
    const destination = { lat:-39.79511, lng:-73.2014 };

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
                {
                    location: { lat:-39.84074, lng: -73.25689 },
                },{
                    location: { lat:-39.83425, lng: -73.25198 },
                },{
                    location: { lat:-39.82781, lng: -73.24952 },
                },{
                    location: { lat:-39.81513, lng: -73.24649 },
                },{
                    location: { lat:-39.81685, lng: -73.23481 },
                },{
                    location: { lat:-39.82789, lng: -73.22241 },
                },{
                    location: { lat:-39.82463, lng: -73.21549 },
                },{
                    location: { lat:-39.82708, lng: -73.21021 },
                },{
                    location: { lat:-39.82445, lng: -73.20864 },
                },{
                    location: { lat:-39.82285, lng: -73.21134 },
                },{
                    location: { lat:-39.82278, lng:-73.20753 },
                }]
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