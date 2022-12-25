import { React, useState, useMemo} from 'react';
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
        strokeColor: 'red',
        strokeOpacity: 1,
        strokeWeight: 4,
        clickable: true,
    };

    const directionsService = new google.maps.DirectionsService();
    let [directions, setDirections] = useState("");

    const origin = { lat: -39.86932955955784, lng: -73.18675730429622 };
    const destination = { lat:-39.806889, lng:-73.252023 };

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
                {location: { lat:-39.837155, lng:-73.199403}},
                {location: { lat:-39.835635, lng:-73.200932}},
                {location:{lat:-39.835373, lng:-73.205805}},
                {location: {lat:-39.838068, lng:-73.209869}},
                {location:{lat:-39.853852, lng:-73.227476}},
                {location:{lat:-39.853713, lng:-73.229831}},
                {location:{lat:-39.853442, lng:-73.232371}},
                {location:{lat:-39.843497, lng:-73.227825}},
                {location:{lat:-39.834478, lng:-73.237997}},
                {location:{lat:-39.830730, lng:-73.238682}},
                {location:{lat:-39.824017, lng:-73.227592}},
                {location:{lat:-39.812371, lng:-73.242226}}
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