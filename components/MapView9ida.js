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

    //cambio nombre
    const center = useMemo(() => ({ lat: -39.8239, lng: -73.2458 }), []);

    const options = {
        strokeColor: '#042ccc',
        strokeOpacity: 0.8,
        strokeWeight: 5,
        clickable: true,
    };

    const directionsService = new google.maps.DirectionsService();
    let [directions, setDirections] = useState("");

    const origin = { lat: -39.85210749049374, lng: -73.25639685302006 };
    const destination = { lat: -39.80745223615869, lng: -73.26666707446635 };

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
                {
                    location: { lat: -39.850291609380534, lng: -73.25020989126818 },
                }, {
                    location: { lat: -39.85050218042244, lng: -73.24671650755046 },
                }, {
                    location: { lat: -39.85110292514644, lng: -73.2308550715372 }
                }, {
                    location: { lat: -39.852600478863764, lng: -73.22511131543305 }
                }, {
                    location: { lat: -39.846479907360354, lng: -73.216343873962 }
                }, {
                    location: { lat: -39.84649790208942, lng: -73.21120358344744 }
                }, {
                    location: { lat: -39.84752320110778, lng: -73.20996868679882 }
                }, {
                    location: { lat: -39.838668620806764, lng: -73.20194911193784 }
                }, {
                    location: { lat: -39.834308351132584, lng: -73.20569431227575 }
                }, {
                    location: { lat: -39.83265641736531, lng: -73.20191741190857 }
                }, {
                    location: { lat: -39.832657534028584, lng: -73.20631184451432 }
                }, {
                    location: { lat: -39.8273518362162, lng: -73.2070406699576 }
                }, {
                    location: { lat: -39.827815860509766, lng: -73.22215355311809 }
                }, {
                    location: { lat: -39.814878336469555, lng: -73.2402067059622 }
                }, {
                    location: { lat: -39.81353240802371, lng: -73.24150709264303 }
                }, {
                    location: { lat: -39.806927189603876, lng: -73.25149110203446 }
                }, {
                    location: { lat: -39.815826655474474, lng: -73.25613052930966 }
                }, {
                    location: { lat: -39.80989121590489, lng: -73.25802917810807 }
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