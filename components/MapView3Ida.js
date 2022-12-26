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
        strokeOpacity: 1,
        strokeWeight: 4,
        clickable: true,
    };

    const directionsService = new google.maps.DirectionsService();
    let [directions, setDirections] = useState("");

    const origin = { lat: -39.86559621702352, lng: -73.3930594575499 };
    const destination = { lat: -39.85079992903318, lng: -73.2462539984911 };

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
                {
                    location: { lat: -39.8129523136694, lng: -73.24147194031515 },
                }, {
                    location: { lat: -39.81354888528052, lng: -73.24158221344523 }
                }, {
                    location: { lat: -39.812859363754576, lng: - 73.24660595520994 }
                }, {
                    location: { lat: -39.81689313129397, lng: -73.23474376905723 }
                }, {
                    location: { lat: -39.83346608063336, lng: -73.21557881295045 }
                }, {
                    location: { lat: -39.83805303737938, lng: -73.2294102709435 }
                }, {
                    location: { lat: -39.84417228425064, lng: -73.22813890469521 }
                }, {
                    location: { lat: -39.85390499448746, lng: -73.24914088583365 }
                }, {
                    location: { lat: -39.85304402320954, lng: -73.25119816619222 }
                }, {
                    location: { lat: -39.84898205106918, lng: -73.24922946232209 }
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