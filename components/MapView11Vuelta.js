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
        strokeColor: '#000000',
        strokeOpacity: 1,
        strokeWeight: 4,
        clickable: true,
    };

    const directionsService = new google.maps.DirectionsService();
    let [directions, setDirections] = useState("");

    const origin = { lat: -39.81285255842069, lng: -73.24663815709053 };
    const destination = { lat: -39.85565119283903, lng: -73.22781974752377 };

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
                {
                    location: { lat: -39.81499404927764, lng: -73.24723567439575 }
                }, {
                    location: { lat: -39.83792312765632, lng: -73.21016464729647 }
                }, {
                    location: { lat: -39.840361367950386, lng: -73.21353054668727 }
                }, {
                    location: { lat: -39.852560032364345, lng: -73.22597611770227 }
                }, {
                    location: { lat: -39.854977034906014, lng: -73.2323915837443 }
                }, {
                    location: { lat: -39.854120205878, lng: -73.23019288356161 }
                },
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