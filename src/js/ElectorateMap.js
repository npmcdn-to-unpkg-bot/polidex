import React from 'react';
import { default as update } from "react-addons-update";

import { GoogleMap, Marker} from "react-google-maps";
import {default as ScriptjsLoader} from "react-google-maps/lib/async/ScriptjsLoader";

import { triggerEvent } from "react-google-maps/lib/utils";

import mygeojson from './mapdata/electorates.json';

// Resize map after container div changes size
function handleWindowResize () {
    triggerEvent(this._googleMapComponent, "resize");
}

export default function ElectorateMap (props) {
    return (
        <div>
            <div className="map-main">
                <section style={{height: "100%"}}>
                    <ScriptjsLoader
                        hostname={"maps.googleapis.com"}
                        pathname={"/maps/api/js"}
                        query={{
                            v: `3.${ ElectorateMap.version }`,
                            libraries: "geometry,drawing,places"
                        }}
                        loadingElement={
                            <div>
                            </div>
                        }
                        containerElement={
                            <div
                                {...props.containerElementProps}
                                    style={{
                                    height: "100vh",
                                }}
                            />
                        }
                        googleMapElement={
                            <GoogleMap
                                ref={(map) => console.log(map)}
                                defaultZoom={4}
                                defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
                                onClick={props.onMapClick}
                                defaultOptions={{
                                styles: [
                                {
                                "featureType":"administrative",
                                "elementType":"labels.text.fill",
                                "stylers":[{
                                "color":"#444444"
                                }]
                                },
                                {
                                "featureType":"landscape",
                                "elementType":"all",
                                "stylers":[{"color":"#f2f2f2"}]
                                },
                                {
                                "featureType":"poi",
                                "elementType":"all",
                                "stylers":[{"visibility":"off"}]
                                },
                                {
                                "featureType":"road",
                                "elementType":"all",
                                "stylers":[{
                                "saturation":-100
                                },
                                {
                                "lightness":45}
                                ]
                                },
                                {
                                "featureType":"road.highway",
                                "elementType":"all",
                                "stylers":[{
                                "visibility":"simplified"
                                }]
                                },{
                                "featureType":"road.arterial",
                                "elementType":"labels.icon",
                                "stylers":[{
                                "visibility":"off"
                                }]
                                },{
                                "featureType":"transit",
                                "elementType":"all",
                                "stylers":[{"visibility":"off"}]
                                },{
                                "featureType":"water",
                                "elementType":"all",
                                "stylers":[{
                                "color":"#BDDAE8"
                                },{"visibility":"on"}]
                                }
                                ],
                                }}
                                >
                                {props.markers.map((marker, index) => {
                                return (
                                <Marker
                                {...marker}
                                onRightclick={() => props.onMarkerRightclick(index)} />
                                );
                                })}
                            </GoogleMap>
                        }
                    />
                </section>
            </div>
            <div className="map-side">
                <div className="above-listing">
                    <div>Search by electorate name or postcose</div>
                    <div className="map-search">
                        <input type="text"/>
                    </div>
                </div>
                <div className="current-electorates">
                    <ul>
                        <li>
                            <div className="title">Politician Name</div>
                            <div className="electorate">Electorate Name</div>
                            <div className="image" style={{ backgroundImage: "url(img/photos/10001.jpg)"}} />
                        </li>
                        <li>
                            <div className="title">Politician Name</div>
                            <div className="electorate">Electorate Name</div>
                            <div className="image" style={{ backgroundImage: "url(img/photos/10014.jpg)"}} />
                        </li>
                        <li>
                            <div className="title">Politician Name</div>
                            <div className="electorate">Electorate Name</div>
                            <div className="image" style={{ backgroundImage: "url(img/photos/10003.jpg)"}} />
                        </li>
                        <li>
                            <div className="title">Politician Name</div>
                            <div className="electorate">Electorate Name</div>
                            <div className="image" style={{ backgroundImage: "url(img/photos/10001.jpg)"}} />
                        </li>
                        <li>
                            <div className="title">Politician Name</div>
                            <div className="electorate">Electorate Name</div>
                            <div className="image" style={{ backgroundImage: "url(img/photos/10014.jpg)"}} />
                        </li>
                        <li>
                            <div className="title">Politician Name</div>
                            <div className="electorate">Electorate Name</div>
                            <div className="image" style={{ backgroundImage: "url(img/photos/10003.jpg)"}} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
