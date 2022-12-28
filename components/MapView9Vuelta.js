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
        strokeColor: '#042ccc',
        strokeOpacity: 0.8,
        strokeWeight: 5,
        clickable: true,
    };

    const directionsService = new google.maps.DirectionsService();
    let [directions, setDirections] = useState("");

    const origin = { lat: -39.80754903672352, lng: -73.2663731787787 };
    const destination = { lat: -39.85219633578425, lng: -73.25648823873466 };

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
                {
                    location: { lat: -39.81410077571017, lng: -73.25947645016453 },
                }, {
                    location: { lat: -39.813508547151685, lng: -73.25392116133138 }
                }, {
                    location: { lat: -39.8069325184448, lng: -73.25153580561454 }
                }, {
                    location: { lat: -39.81536104936885, lng: -73.2451200007843 }
                }, {
                    location: { lat: -39.83349168978211, lng: -73.21562945041504 }
                }, {
                    location: { lat: -39.83034135356011, lng: -73.20987516101896 }
                }, {
                    location: { lat: -39.83215469748092, lng: -73.20197746163717 }
                }, {
                    location: { lat: -39.83291805889718, lng: -73.2021781860077 }
                }, {
                    location: { lat: -39.83434835983647, lng: -73.20589085860519 }
                }, {
                    location: { lat: -39.838770458949625, lng: -73.2018572535512 }
                }, {
                    location: { lat: -39.84309823410642, lng: -73.20598850280278 }
                }, {
                    location: { lat: -39.84619034899387, lng: -73.2098799392315 }
                }, {
                    location: { lat: -39.84630499514696, lng: -73.21800514167866 }
                }, {
                    location: { lat: -39.85180156306953, lng: -73.22659842779873 }
                }, {
                    location: { lat: -39.850457271465494, lng: -73.24672369194903 }
                }, {
                    location: { lat: -39.85022138882901, lng: -73.25044104388502 }
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