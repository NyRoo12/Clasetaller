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
        strokeColor: '#3bf851',
        strokeOpacity: 1,
        strokeWeight: 4,
        clickable: true,
    };

    const directionsService = new google.maps.DirectionsService();
    let [directions, setDirections] = useState("");

    const origin = { lat: -39.79416916633918, lng: -73.2005739023082 };
    const destination = { lat: -39.80672278186122, lng: -73.25201867347279 };

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
                {
                    location: { lat: -39.82159996850798, lng: -73.21050693404868 }
                }, {
                    location: { lat: -39.824473511270845, lng: -73.21242815250527 }
                }, {
                    location: { lat: -39.8272052680947, lng: -73.2071433533076 }
                }, {
                    location: { lat: -39.83528774054967, lng: -73.20593503398614 }
                }, {
                    location: { lat: -39.84095192161107, lng: -73.21754452842052 }
                }, {
                    location: { lat: -39.83822537024606, lng: -73.22948205450555 }
                }, {
                    location: { lat: -39.844239602331974, lng: -73.2283418759547 }
                }, {
                    location: { lat: -39.837619433449106, lng: -73.23379967049355 }
                }, {
                    location: { lat: -39.8362106736194, lng: -73.2374099238199 }
                }, {
                    location: { lat: -39.831724787426644, lng: -73.23763587919211 }
                }, {
                    location: { lat: -39.828969732253356, lng: -73.24046164611518 }
                }, {
                    location: { lat: -39.815169826988566, lng: -73.24638680415046 }
                }, {
                    location: { lat: -39.81607014698566, lng: -73.2405744575975 }
                }, {
                    location: { lat: -39.80693717064562, lng: -73.25147212940821 }
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