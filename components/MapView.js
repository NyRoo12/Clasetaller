import { React } from 'react';
import {Polyline, GoogleMap, useLoadScript} from '@react-google-maps/api';
import credentials from './credentials';

export default function MapView() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: credentials.mapsKey,
    });
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;

}
function Map() {
    const center = { lat: -39.8239, lng: -73.2458 };

    const onLoad = polyline => {
        console.log('polyline: ', polyline)
    };

    var path = [
        { lat: -39.8259, lng: -73.2458 },
        { lat: -39.8279, lng: -73.2438 },
        { lat: -39.8299, lng: -73.2468 },
        { lat: -39.8319, lng: -73.2458 },
        { lat: -39.8339, lng: -73.2418 }
    ];

    const options = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 6,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: true,
        draggable: true,
        editable: false,
        visible: true,
        radius: 30000,
    
    };

    return (
        <GoogleMap

            zoom={14}
            center={center}
            mapContainerClassName="map-container"
            mapTypeId='roadmap'
        >
            <Polyline
                onLoad={onLoad}
                path={path}
                options={options}
            />

        </GoogleMap>
    )
}