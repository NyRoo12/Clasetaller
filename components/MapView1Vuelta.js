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

    const origin = { lat:-39.79511, lng:-73.2014 };
    const destination = { lat:-39.85034, lng:-73.25053 };

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints:  [
                {
                    location: { lat:-39.82278, lng:-73.20753 },
                },{
                    location: { lat:-39.82285, lng: -73.21134 },
                },{
                    location: { lat:-39.82445, lng: -73.20864 },
                },{
                    location: { lat:-39.82708, lng: -73.21021},
                },{
                    location: { lat:-39.82463, lng: -73.21549 },
                },{
                    location: { lat:-39.82789, lng: -73.22241 },
                },{
                    location: { lat:-39.81489, lng: -73.24029 },
                },{
                    location: { lat:-39.81382, lng: -73.23979 },
                },{
                    location: { lat:-39.81287, lng: -73.24658 },
                },{
                    location: { lat:-39.81443, lng: -73.24783 },
                },{
                    location: { lat:-39.84974, lng: -73.25252 },
                },{
                    location: { lat:-39.85004, lng: -73.2542 },
                },{
                    location: { lat:-39.8511,  lng: -73.25267 },
                },{
                    location: { lat:-39.84995, lng: -73.25137 },
                },{
                    location: { lat:-39.85091, lng: -73.25082 },
                },{
                    location: { lat:-39.85302, lng: -73.2513 },
                },{
                    location: { lat:-39.85265, lng: -73.24826 },
                },{
                    location: { lat:-39.85081, lng: -73.24625 },
                },{
                    location: { lat:-39.84886, lng: -73.2494 },
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