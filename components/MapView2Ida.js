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
        strokeColor: '#2d9b14',
        strokeOpacity: 0.8,
        strokeWeight: 5,
        clickable: true,
    };

    const directionsService = new google.maps.DirectionsService();
    let [directions, setDirections] = useState("");

    const origin = { lat: -39.77116, lng: -73.21999 };
    const destination = { lat: -39.84958, lng: -73.23162 };

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
                {
                    location: { lat: -39.77346, lng: -73.21098 }
                }, {
                    location: { lat: -39.77671, lng: -73.19109 }
                }, {
                    location: { lat: -39.78139, lng: -73.19461 }
                }, {
                    location: { lat: -39.79263, lng: -73.21735 }
                }, {
                    location: { lat: -39.80669, lng: -73.22073 }
                }, {
                    location: { lat: -39.80799, lng: -73.22176 }
                }, {
                    location: { lat: -39.80861, lng: -73.22074 }
                }, {
                    location: { lat: -39.81077, lng: -73.22274 }
                }, {
                    location: { lat: -39.81245, lng: -73.22171 }
                }, {
                    location: { lat: -39.81251, lng: -73.24134 }
                }, {
                    location: { lat: -39.81354, lng: -73.24156 }
                }, {
                    location: { lat: -39.81287, lng: -73.2466 }
                }, {
                    location: { lat: -39.81881, lng: -73.24902 }
                }, {
                    location: { lat: -39.81961, lng: -73.24437 }
                }, {
                    location: { lat: -39.82845, lng: -73.24671 }
                }, {
                    location: { lat: -39.83021, lng: -73.23932 }
                }, {
                    location: { lat: -39.82758, lng: -73.23565 }
                }, {
                    location: { lat: -39.83129, lng: -73.23709 }
                }, {
                    location: { lat: -39.83363, lng: -73.241 }
                }, {
                    location: { lat: -39.83811, lng: -73.22945 }
                }, {
                    location: { lat: -39.84301, lng: -73.22847 }
                }, {
                    location: { lat: -39.8438, lng: -73.22871 }
                }, {
                    location: { lat: -39.84492, lng: -73.2322 }
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
