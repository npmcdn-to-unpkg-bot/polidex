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
      filteredList: mygeojson.features,

      hoverTest: ''
    }

    handleSearch(e) {
        const searchCondition = new RegExp(this.searchField.value, 'i');

        const filtered = this.state.unfilteredList.filter( function(datum) {
            console.log(datum.properties);
            return (
              datum.properties.ELECT_DIV.search(searchCondition) > -1
            );
        });

        this.setState({
            filteredList: filtered
        });
    }

    // Sidebar hover events
    onMouseOver() {
        
    }

    // Map electorates hover events
    onMouseEnterHandler(hovered) {
        console.log(hovered);

        this.setState({
            hoverTest: hovered.POLITICIAN_NAME
        });
    }

    onMouseLeaveHandler() {
        this.setState({
            hoverTest: ''
        });
    }

    handlePolygonClick(thing) {
        console.log(thing);

        // For now, open popup
        var number = thing.POLITICIAN_ID;
        this.setState({
            currentModal: number,
            modalIsOpen: true
        });
    }

    openModal(e) {
        e.preventDefault();
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

        const hoverTest = state.hoverTest;

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
                                    zoomControlOptions: {
                                      // position: google.maps.ControlPosition.LEFT_CENTER
                                    },
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
                                          "color":"#a3d8ef"
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
                                      var style = '';
                                      switch(properties.POLITICIAN_PARTY) {
                                        case "Liberal Party":
                                          style = {
                                            strokeColor: '#0F71EF',
                                            strokeOpacity: 1,
                                            strokeWeight: 1.5,
                                            fillColor: '#0F71EF',
                                            fillOpacity: 0.75
                                          };
                                          break;
                                        case "Australian Labor Party":
                                          style = {
                                            strokeColor: '#DC5C5C',
                                            strokeOpacity: 1,
                                            strokeWeight: 1.5,
                                            fillColor: '#DC5C5C',
                                            fillOpacity: 0.75
                                          };
                                          break;
                                        case "National Party":
                                          style = {
                                            strokeColor: '#70CAA5',
                                            strokeOpacity: 1,
                                            strokeWeight: 1.5,
                                            fillColor: '#70CAA5',
                                            fillOpacity: 0.75
                                          };
                                          break;
                                        case "Independent":
                                          style = {
                                            strokeColor: '#9664BB',
                                            strokeOpacity: 1,
                                            strokeWeight: 1.5,
                                            fillColor: '#9664BB',
                                            fillOpacity: 0.75
                                          };
                                          break;
                                        case "Australian Greens":
                                          style = {
                                            strokeColor: '#89C106',
                                            strokeOpacity: 1,
                                            strokeWeight: 1.5,
                                            fillColor: '#89C106',
                                            fillOpacity: 0.75
                                          };
                                          break;
                                        case "CWM":
                                          style = {
                                            strokeColor: '#222222',
                                            strokeOpacity: 1,
                                            strokeWeight: 1.5,
                                            fillColor: '#222222',
                                            fillOpacity: 0.75
                                          };
                                          break;
                                        case "Palmer United Party":
                                          style = {
                                            strokeColor: '#DAC532',
                                            strokeOpacity: 1,
                                            strokeWeight: 1.5,
                                            fillColor: '#DAC532',
                                            fillOpacity: 0.75
                                          };
                                          break;
                                        case "Country Liberal Party":
                                          style = {
                                            strokeColor: '#34BFAC',
                                            strokeOpacity: 1,
                                            strokeWeight: 1.5,
                                            fillColor: '#34BFAC',
                                            fillOpacity: 0.75
                                          };
                                          break;
                                        case "Liberal Democratic Party":
                                          style = {
                                            strokeColor: '#3ED1E8',
                                            strokeOpacity: 1,
                                            strokeWeight: 1.5,
                                            fillColor: '#3ED1E8',
                                            fillOpacity: 0.75
                                          };
                                          break;
                                        case "Family First Party":
                                          style = {
                                            strokeColor: '#EF950F',
                                            strokeOpacity: 1,
                                            strokeWeight: 1.5,
                                            fillColor: '#EF950F',
                                            fillOpacity: 0.75
                                          };
                                          break;
                                        case "Liberal National Party":
                                          style = {
                                            strokeColor: '#C18686',
                                            strokeOpacity: 1,
                                            strokeWeight: 1.5,
                                            fillColor: '#C18686',
                                            fillOpacity: 0.75
                                          };
                                          break;
                                        case "Australian Motoring Enthusiast Party":
                                          style = {
                                            strokeColor: '#DE68AF',
                                            strokeOpacity: 1,
                                            strokeWeight: 1.5,
                                            fillColor: '#DE68AF',
                                            fillOpacity: 0.75
                                          };
                                          break;
                                        case "SPK":
                                          style = {
                                            strokeColor: '#222222',
                                            strokeOpacity: 1,
                                            strokeWeight: 1.5,
                                            fillColor: '#222222',
                                            fillOpacity: 0.75
                                          };
                                          break;
                                      }

                                      array.push(
                                          <ElementClass
                                              key={index}
                                              {...properties}
                                              {...geometry}
                                              options={style}
                                              onClick={() => this.handlePolygonClick(properties)}
                                              onMouseover={() => this.onMouseEnterHandler(properties)}
                                              onMouseout={() => this.onMouseLeaveHandler(properties)}
                                          >
                                            <InfoWindow
                                                key={index}
                                                position={
                                                  "0",
                                                  "0"
                                                }
                                            >
                                                Hey
                                            </InfoWindow>
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
                              var style = {};
                              switch(feature.properties.POLITICIAN_PARTY) {
                                case "Liberal Party":
                                  style = {
                                    color: '#0F71EF'
                                  };
                                  break;
                                case "Australian Labor Party":
                                  style = {
                                    color: '#DC5C5C'
                                  };
                                  break;
                                case "National Party":
                                  style = {
                                    color: '#70CAA5'
                                  };
                                  break;
                                case "Independent":
                                  style = {
                                    color: '#9664BB'
                                  };
                                  break;
                                case "Australian Greens":
                                  style = {
                                    color: '#89C106'
                                  };
                                  break;
                                case "CWM":
                                  style = {
                                    color: '#222222'
                                  };
                                  break;
                                case "Palmer United Party":
                                  style = {
                                    color: '#DAC532'
                                  };
                                  break;
                                case "Country Liberal Party":
                                  style = {
                                    color: '#34BFAC'
                                  };
                                  break;
                                case "Liberal Democratic Party":
                                  style = {
                                    color: '#3ED1E8'
                                  };
                                  break;
                                case "Family First Party":
                                  style = {
                                    color: '#EF950F'
                                  };
                                  break;
                                case "Liberal National Party":
                                  style = {
                                    color: '#C18686'
                                  };
                                  break;
                                case "Australian Motoring Enthusiast Party":
                                  style = {
                                    color: '#DE68AF'
                                  };
                                  break;
                                case "SPK":
                                  style = {
                                    color: '#222222'
                                  };
                                  break;
                              }
                              if (feature.properties.POLITICIAN_ID) {
                                return(
                                  <li key={key}>
                                      <a
                                        href="#"
                                        title={feature.properties.ELECT_DIV}
                                        data-id={feature.properties.POLITICIAN_ID}
                                        onClick={this.openModal.bind(this)}
                                      >
                                          <div className="electorate">{feature.properties.ELECT_DIV}, {feature.properties.STATE}</div>
                                          <div className="title" style={style}>{feature.properties.POLITICIAN_PARTY}</div>
                                          <div className="name">{feature.properties.POLITICIAN_NAME}</div>
                                          <div className="image" style={{ backgroundImage: "url(img/photos/" + feature.properties.POLITICIAN_ID + ".jpg)"}} />
                                      </a>
                                  </li>
                                )
                              }
                            }, this)}
                        </ul>
                    </div>
                </div>

                <div className="demo-hover">{ hoverTest }</div>

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
