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
        strokeOpacity: 0.8,
        strokeWeight: 5,
        clickable: true,
    };

    const directionsService = new google.maps.DirectionsService();
    let [directions, setDirections] = useState("");

    const origin = { lat: -39.85396838019846, lng: -73.22762293333902 };
    const destination = { lat: -39.81285255842069, lng: -73.24663815709053 };

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
                {
                    location: { lat: -39.85338268865962, lng: -73.22810334025876 }
                }, {
                    location: { lat: -39.85423977022194, lng: -73.2287787267261 }
                }, {
                    location: { lat: -39.855867625535375, lng: -73.23003401391252 }
                }, {
                    location: { lat: -39.853546940777214, lng: -73.2320356198988 }
                }, {
                    location: { lat: -39.853525329928, lng: -73.22967184949414 }
                }, {
                    location: { lat: -39.85053131990039, lng: -73.22940594372423 }
                }, {
                    location: { lat: -39.8520959789091, lng: -73.22639542836824 }
                }, {
                    location: { lat: -39.85272031910297, lng: -73.22587372853462 }
                }, {
                    location: { lat: -39.840975249828155, lng: -73.21753365635179 }
                }, {
                    location: { lat: -39.838063755494936, lng: -73.20989598010281 }
                }, {
                    location: { lat: -39.814889567514456, lng: -73.24030161084363 }
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