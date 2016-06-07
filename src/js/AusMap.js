import React from 'react';
import PoliticianPokedex from './PoliticianPokedex';
import Header from './Header';
import OffCanvas from './OffCanvas';
import {GoogleMapLoader, GoogleMap, Marker, Polyline, Polygon, InfoWindow} from "../../node_modules/react-google-maps/lib/index";
import {triggerEvent} from "../../node_modules/react-google-maps/lib/utils";

// Resize map after container div changes size
function handleWindowResize () {
    triggerEvent(this._googleMapComponent, "resize");
}

// Convert map data to react components
// function geometryToComponentWithLatLng(geometry) {
//   const typeFromThis = Array.isArray(geometry);
//   const type = typeFromThis ? this.type : geometry.type;
//   let coordinates = typeFromThis ? geometry : geometry.coordinates;
//
//   switch (type) {
//     case 'Polygon':
//       return {
//         ElementClass: Polygon,
//         paths: coordinates.map(geometryToComponentWithLatLng, { type: 'LineString' })[0],
//       };
//     case 'LineString':
//       coordinates = coordinates.map(geometryToComponentWithLatLng, { type: 'Point' });
//       return typeFromThis ? coordinates : {
//         ElementClass: Polyline,
//         path: coordinates,
//       };
//     case 'Point':
//       coordinates = new google.maps.LatLng(coordinates[1], coordinates[0]);
//       return typeFromThis ? coordinates : {
//         ElementClass: Marker,
//         ChildElementClass: InfoWindow,
//         position: coordinates,
//       };
//     default:
//       throw new TypeError('Unknown geometry type: ${ type }');
//   }
// }
//
// export default class GeojsonToComponents extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             geoJson: require('./googlemapdata/electorates'),
//             geoStateBy: {
//                 0: {
//                     ref: 'map',
//                     style: { height: '100%' },
//                     onClick: ::this.handleMapClick,
//                     onZoomChanged: ::this.handleMapZoomChanged,
//                 },
//                 1: {
//                     ref: 'centerMarker',
//                     visible: true,
//                     draggable: true,
//                     onDragend: ::this.handleMarkerDragend,
//                     onClick: ::this.handleMarkerClick,
//                     child: {
//                         content: 'Bermuda Triangle',
//                         owner: 'centerMarker',
//                     },
//                 },
//                 3: {
//                     onRightclick: ::this.handlePolygonRightclick,
//                 },
//             },
//         };
//     }
// }

export default function MapArea (props) {
    return (
        <section style={{height: "100%"}}>
          <GoogleMapLoader
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
                defaultZoom={3}
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
    )
}

export default class AusMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            markers: [{
                position: {
                    lat: 25.0112183,
                    lng: 121.52067570000001,
                },
                key: 'Taiwan',
                defaultAnimation: 2,
            }]
        };
    }

    componentDidMount() {
    }

    _handle_map_click(event) {
    }

    render(props) {
        return (
          <div>
            <OffCanvas />

            <div className="site-overlay"></div>

            <div id="container">
              <div className="app clearfix">

                <Header />

                <div className="page-main" id="page-main">
                    <div className="map-main">
                        <MapArea
                            markers={this.state.markers}
                            onMapClick={::this._handle_map_click}
                        />
                    </div>
                    <div className="map-side">
                        <div className="map-search">
                            <input type="text" />
                        </div>
                    </div>
                </div>

              </div>
            </div>
          </div>
        )
    }
}
