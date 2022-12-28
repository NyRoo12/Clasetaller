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

    const origin = { lat: -39.80687654029117, lng: -73.25167422727712 };
    const destination = { lat: -39.85699947632048, lng: -73.23745504694396 };

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
                {
                    location: { lat: -39.81026748529907, lng: -73.25216989554623 }
                }, {
                    location: { lat: -39.81006829478492, lng: -73.25767559627589 },
                }, {
                    location: { lat: -39.81296668402236, lng: -73.24144635681306 }
                }, {
                    location: { lat: -39.81353538635768, lng: -73.24157320279716 }
                }, {
                    location: { lat: -39.81287590463508, lng: -73.24661139130646 }
                }, {
                    location: { lat: -39.8150044047969, lng: -73.24723571854568 }
                }, {
                    location: { lat: -39.82848566751558, lng: -73.24671658299519 }
                }, {
                    location: { lat: -39.831662314345316, lng: -73.23776981036636 }
                }, {
                    location: { lat: -39.853930023296726, lng: -73.24914523050522 }
                }, {
                    location: { lat: -39.85496917665264, lng: -73.24742872033838 }
                }, {
                    location: { lat: -39.85728442167745, lng: -73.24532302885575 }
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