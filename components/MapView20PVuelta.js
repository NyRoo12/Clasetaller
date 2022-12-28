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
        strokeColor: '#ea802f',
        strokeOpacity: 0.8,
        strokeWeight: 5,
        clickable: true,
    };

    const directionsService = new google.maps.DirectionsService();
    let [directions, setDirections] = useState("");

    const origin = { lat: -39.85079992903318, lng: -73.2462539984911 };
    const destination = { lat: -39.86559621702352, lng: -73.3930594575499 };

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
                {
                    location: { lat: -39.84898205106918, lng: -73.24922946232209 },
                }, {
                    location: { lat: -39.85304402320954, lng: -73.25119816619222 }
                }, {
                    location: { lat: -39.85390499448746, lng: -73.24914088583365 }
                }, {
                    location: { lat: -39.84417228425064, lng: -73.22813890469521 }
                }, {
                    location: { lat: -39.83811245820135, lng: -73.2294495211231 }
                }, {
                    location: { lat: -39.83384233394548, lng: -73.21576568892881 }
                }, {
                    location: { lat: -39.815666710500686, lng: -73.23627449921293 }
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