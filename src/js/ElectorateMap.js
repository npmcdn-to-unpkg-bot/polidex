import React from 'react';
import { default as update } from "react-addons-update";

import { GoogleMap, Marker, Polyline, Polygon, InfoWindow } from "react-google-maps";
import {default as ScriptjsLoader} from "react-google-maps/lib/async/ScriptjsLoader";

import { triggerEvent } from "react-google-maps/lib/utils";

import PoliticianPopup from './PoliticianPopup';
import Modal from '../../bower_components/react-modal/lib/index';

import mygeojson from './mapdata/electorates.json';

// Modal Style
const customStyles = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 0, 0.5)',
        zIndex            : 3,
        overflowY         : 'auto'
    },
    content : {
        display               : 'table',
        width                 : '100%',
        height                : '100%',
        position              : 'static',
        background            : 'none',
        top                   : 'auto',
        left                  : 'auto',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '0px',
        transform             : 'none',
        border                : 'none',
        padding               : '0px',
        pointerEvents         : 'none'
    }
};

// Resize map after container div changes size
function handleWindowResize () {
    triggerEvent(this._googleMapComponent, "resize");
}

// Convert geojson to components?
function geometryToComponentWithLatLng(geometry) {
  const typeFromThis = Array.isArray(geometry);
  const type = typeFromThis ? this.type : geometry.type;
  let coordinates = typeFromThis ? geometry : geometry.coordinates;

  switch (type) {
    case 'MultiPolygon':
      return {
        ElementClass: Polygon,
        paths: coordinates.map(
          geometryToComponentWithLatLng, {
            type: 'Polygon'
          }
        ),
      };
    case 'Polygon':
      coordinates = coordinates.map(
        geometryToComponentWithLatLng, {
          type: 'LineString'
        }
      )[0];
      return typeFromThis ? coordinates : {
        ElementClass: Polygon,
        path: coordinates,
      };
    case 'LineString':
      coordinates = coordinates.map(
        geometryToComponentWithLatLng, {
          type: 'Point'
        }
      );
      return typeFromThis ? coordinates : {
        ElementClass: Polyline,
        path: coordinates,
      };
    case 'Point':
      coordinates = {
        lat: coordinates[1],
        lng: coordinates[0]
      }
      return typeFromThis ? coordinates : {
        ElementClass: Marker,
        ChildElementClass: InfoWindow,
        position: coordinates,
      };
    default:
      throw new TypeError('Unknown geometry type: ${ type }');
  }
}

export default class ElectorateMap extends React.Component {
    state = {
      currentModal: '0',
      modalIsOpen: false,
      geoJson: mygeojson,
      unfilteredList: mygeojson.features,
      filteredList: mygeojson.features
    }

    handleSearch(e) {
        const searchCondition = new RegExp(this.searchField.value, 'i');

        const filtered = this.state.unfilteredList.filter( function(datum) {
            return (
              datum.properties.ELECT_DIV.search(searchCondition) > -1
            );
        });

        this.setState({
            filteredList: filtered
        });
    }

    handleMapClick() {
    }

    handleMapZoomChanged() {
    }

    handleMarkerClick() {
    }

    handlePolygonClick(thing) {
        console.log(thing);
    }

    openModal(e) {
        var number = e.currentTarget.getAttribute('data-id');

        this.setState({
            currentModal: number,
            modalIsOpen: true
        });
    }

    afterOpenModal() {
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }

    render() {
        const { props, state } = this;
        const { googleMapsApi, ...otherProps } = props;
        const { features } = state.geoJson;
        const featuresFiltered = state.filteredList;
        // const { geoStateBy } = state;
        // const mapFeature = features[0];
        // const mapGeometry = geometryToComponentWithLatLng(mapFeature.geometry);
        // const mapState = geoStateBy[0];

        return (
            <div className="header-push">
                <div className="map-main">
                    <section>
                        <ScriptjsLoader
                            hostname={"maps.googleapis.com"}
                            pathname={"/maps/api/js"}
                            query={{
                                v: '3.$' + ElectorateMap.version,
                                libraries: "geometry,drawing,places",
                                key: 'AIzaSyCd53fH-VPomzjz_f0z82F3vehMPHb5MyU'
                            }}
                            loadingElement={
                                <div>
                                </div>
                            }
                            containerElement={
                                <div
                                  style={{
                                    height: "100vh",
                                    height: "calc(100vh - 50px)"
                                  }}
                                />
                            }
                            googleMapElement={
                                <GoogleMap
                                  ref={(map) => console.log(map)}
                                  defaultZoom={4}
                                  defaultCenter={{ lat: -25.363882, lng: 131.044922 }}

                                  defaultOptions={{
                                    zoomControl: true,
                                    mapTypeControl: false,
                                    scaleControl: false,
                                    streetViewControl: false,
                                    rotateControl: false,
                                    fullscreenControl: false,
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
                                          },{"visibility":"on"
                                        }]
                                      }
                                    ],
                                  }}
                                >
                                    {features.reduce((array, feature, index) => {
                                      if (index === 0) {
                                        return array;
                                      }
                                      const { properties } = feature;
                                      const { ElementClass, ChildElementClass, ...geometry } = geometryToComponentWithLatLng(feature.geometry);

                                    //   const { visible, child, ...featureState } = geoStateBy[0] || {};
                                    //   if (visible !== false) {
                                    //  }
                                    //
                                    // {child ?
                                    //   <ChildElementClass {...child} /> : null}
                                    array.push(
                                        <ElementClass
                                            key={index}
                                            {...properties}
                                            {...geometry}
                                            strokeColor="#EFEFEF"
                                            strokeOpacity={0.5}
                                            strokeWeight={0.5}
                                            fillColor="#FF0000"
                                            fillOpacity={0.35}
                                            onClick={() => this.handlePolygonClick(properties)}
                                        >
                                        </ElementClass>
                                    );
                                      return array;
                                    }, [], this)}
                                </GoogleMap>
                            }
                        />
                    </section>
                </div>
                <div className="map-side">
                    <div className="above-listing">
                        <div className="map-search">
                            <input
                              type="text"
                              placeholder="Search by postcode..."
                              onChange={ this.handleSearch.bind(this) }
                              ref={(ref) => this.searchField = ref}
                            />
                        </div>
                    </div>
                    <div className="current-electorates">
                        <ul>
                            {featuresFiltered.map( function(feature, key) {
                              return(
                                <li key={key} data-id={feature.properties.REPRESENTATIVE} onClick={this.openModal.bind(this)}>
                                    <div className="title">{feature.properties.ELECT_DIV}</div>
                                    <div className="electorate">{feature.properties.ELECT_DIV}, {feature.properties.STATE}</div>
                                    <div className="image" style={{ backgroundImage: "url(img/photos/" + feature.properties.REPRESENTATIVE + ".jpg)"}} />
                                </li>
                              )
                            }, this)}
                        </ul>
                    </div>
                </div>

                <Modal
                    isOpen={ this.state.modalIsOpen }
                    onAfterOpen={ this.afterOpenModal.bind(this) }
                    onRequestClose={ this.closeModal.bind(this) }
                    style={ customStyles }
                >
                    <button className="close" onClick={ this.closeModal.bind(this) }>Close</button>
                    <PoliticianPopup
                        politicianId={ this.state.currentModal }
                    />
                </Modal>
            </div>
        )
    }
}
