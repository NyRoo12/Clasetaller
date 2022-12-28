import { React, useState, useMemo } from 'react';
import { GoogleMap, useLoadScript, DirectionsRenderer } from '@react-google-maps/api';
import credentials from './credentials';

export default function MapViewV() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: credentials.mapsKey,
    });
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;

}

function Map() {

    const center = useMemo(() => ({ lat: -39.8239, lng: -73.2458 }), []);

    const options = {
        strokeColor: '#c6c6c6',
        strokeOpacity: 1,
        strokeWeight: 5,
        clickable: true,
    };

    const directionsService = new google.maps.DirectionsService();
    let [directions, setDirections] = useState("");

    const origin = { lat: -39.806889, lng: -73.252023 };
    const destination = { lat: -39.86932955955784, lng: -73.18675730429622 };

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
                { location: { lat: -39.815027, lng: -73.247062 } },
                { location: { lat: -39.820072, lng: -73.230046 } },
                { location: { lat: -39.823491, lng: -73.234604 } },
                { location: { lat: -39.830220, lng: -73.239294 } },
                { location: { lat: -39.834309, lng: -73.240339 } },
                { location: { lat: -39.842168, lng: -73.228702 } },
                { location: { lat: -39.843871, lng: -73.228201 } },
                { location: { lat: -39.855073, lng: -73.231722 } },
                { location: { lat: -39.852766, lng: -73.228879 } },
                { location: { lat: -39.837777, lng: -73.209472 } },
                { location: { lat: -39.835720, lng: -73.200491 } }

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