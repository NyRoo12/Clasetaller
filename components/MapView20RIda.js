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

    const origin = { lat: -39.85699947632048, lng: -73.23745504694396 };
    const destination = { lat: -39.80687654029117, lng: -73.25167422727712 };

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
                {
                    location: { lat: -39.856883991523944, lng: -73.23732237263198 },
                }, {
                    location: { lat: -39.85636252988498, lng: -73.24668857011143 }
                }, {
                    location: { lat: -39.854938922872414, lng: -73.24744973743684 }
                }, {
                    location: { lat: -39.85398270924825, lng: -73.24900800483663 }
                }, {
                    location: { lat: -39.831733609899906, lng: -73.23759590587318 }
                }, {
                    location: { lat: -39.82843396354214, lng: -73.24669559219419 }
                }, {
                    location: { lat: -39.819649023261384, lng: -73.24437848702848 }
                }, {
                    location: { lat: -39.81900601474255, lng: -73.24764582462701 }
                }, {
                    location: { lat: -39.815252124716245, lng: -73.24651545047512 }
                }, {
                    location: { lat: -39.816890756692764, lng: -73.23485132599943 }
                }, {
                    location: { lat: -39.80707363418188, lng: -73.25134526239734 }
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