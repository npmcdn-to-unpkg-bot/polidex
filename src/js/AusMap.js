import React from 'react';
import PoliticianPokedex from './PoliticianPokedex';
import Header from './Header';
import OffCanvas from './OffCanvas';
import {GoogleMapLoader, GoogleMap, Marker} from "../../node_modules/react-google-maps/lib/index";
import {triggerEvent} from "../../node_modules/react-google-maps/lib/utils";

// Resize map after container div changes size
function handleWindowResize () {
    triggerEvent(this._googleMapComponent, "resize");
}

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
                key: `Taiwan`,
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
