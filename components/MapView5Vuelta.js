<<<<<<< HEAD
import { React, useState } from 'react';
=======
import { React, useState, useMemo } from 'react';
>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd
import { GoogleMap, useLoadScript, DirectionsRenderer } from '@react-google-maps/api';
import credentials from './credentials';

export default function MapView() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: credentials.mapsKey,
    });
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;

}
<<<<<<< HEAD
function Map() {

    const center = { lat: -39.8239, lng: -73.2458 };

    const options = {
        strokeColor: 'orange',
=======

function Map() {

    const center = useMemo(() => ({ lat: -39.8239, lng: -73.2458 }), []);

    const options = {
        strokeColor: '#3bf851',
>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd
        strokeOpacity: 1,
        strokeWeight: 4,
        clickable: true,
    };

    const directionsService = new google.maps.DirectionsService();
    let [directions, setDirections] = useState("");

<<<<<<< HEAD
    const origin = { lat: -39.79416916633918, lng: -73.2005739023082 };
    const destination = { lat: -39.80672278186122, lng: -73.25201867347279 };
=======
    const origin = { lat: -39.80672278186122, lng: -73.25201867347279 };
    const destination = { lat: -39.79416916633918, lng: -73.2005739023082 };
>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,

            waypoints: [
                {
<<<<<<< HEAD
                       location: { lat: -39.82159996850798, lng: -73.21050693404868 } 
                  },{
                       location: { lat: -39.824473511270845, lng: -73.21242815250527 } 
                   },{
                       location: { lat: -39.8272052680947, lng: -73.2071433533076 }
                   }, {
                       location: { lat: -39.83528774054967, lng: -73.20593503398614 } 
                   },{
                       location: { lat: -39.84095192161107, lng: -73.21754452842052 }
                   },{
                       location: { lat: -39.83822537024606, lng: -73.22948205450555 }
                   },{
                       location: { lat: -39.844239602331974, lng: -73.2283418759547 } 
                   },{
                       location: { lat: -39.837619433449106, lng: -73.23379967049355 } 
                   },{
                       location: { lat: -39.8362106736194, lng: -73.2374099238199 } 
                   },{
                       location: {  lat: -39.831724787426644, lng: -73.23763587919211 }
                   },{
                      location: { lat: -39.828969732253356, lng:  -73.24046164611518  }
                  },{
                      location: { lat: -39.815169826988566, lng: -73.24638680415046 }  
                   },{
                      location: { lat: -39.81607014698566, lng: -73.2405744575975 }
                   },{
                      location: { lat: -39.80693717064562, lng: -73.25147212940821 }  
                   }
=======
                    location: { lat: -39.81101053933783, lng: -73.25237272467758 }
                }, {
                    location: { lat: -39.81500510769576, lng: -73.24724134310712 }
                }, {
                    location: { lat: -39.81686082703884, lng: -73.23481587144258 }
                }, {
                    location: { lat: -39.82280139013859, lng: -73.22898583249587 }
                }, {
                    location: { lat: -39.823256100277334, lng: -73.23263614017618 }
                }, {
                    location: { lat: -39.825505127557854, lng: -73.23219458403611 }
                }, {
                    location: { lat: -39.830214375271396, lng: -73.23932684679957 }
                }, {
                    location: { lat: -39.83165845169415, lng: -73.23773665084275 }
                }, {
                    location: { lat: -39.832700902746666, lng: -73.23930006831962 }
                }, {
                    location: { lat: -39.83650612189402, lng: -73.23727662017642 }
                }, {
                    location: { lat: -39.84507479297024, lng: -73.23218421866312 }
                }, {
                    location: { lat: -39.84432724643165, lng: -73.22806434568209 }
                }, {
                    location: { lat: -39.838114201707256, lng: -73.22946001945155 }
                }, {
                    location: { lat: -39.83643253323847, lng: -73.219782430481 }
                }, {
                    location: { lat: -39.84096325669834, lng: -73.21729808949739 }
                }, {
                    location: { lat: -39.83524169789292, lng: -73.20589691376615 }
                }, {
                    location: { lat: -39.82159996850798, lng: -73.21050693404868 },
                }

>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd
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
<<<<<<< HEAD
return (
=======

    return (
>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd
        <GoogleMap

            zoom={14}
            center={center}
            mapContainerClassName="map-container"
            mapTypeId='roadmap'
        >
<<<<<<< HEAD
=======

>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd
            <DirectionsRenderer
                directions={directions}
                options={{
                    polylineOptions: { options },
                    markerOptions: { opacity: 0.0 }
                }}

            />
<<<<<<< HEAD
=======

>>>>>>> f98ad4dc03bbe96b0651f968520b974afc5955cd
        </GoogleMap>
    )
}