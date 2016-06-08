import React from 'react';
import PoliticianPokedex from './PoliticianPokedex';
import Header from './Header';
import OffCanvas from './OffCanvas';

import { render } from 'react-dom';
import {
    Circle,
    CircleMarker,
    Map,
    Marker,
    MultiPolygon,
    MultiPolyline,
    Polygon,
    Polyline,
    Popup,
    Rectangle,
    TileLayer,
    GeoJson
} from 'react-leaflet';

import mygeojson from './mapdata/electorates.json';
const center = [-27.24, 133.7751];

const map = (
    <Map center={center} zoom={5} animate={true}>
        <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
            <Popup>
                <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
            </Popup>
        </Marker>
        <Circle center={center} fillColor='blue' radius={200} />
    </Map>
);

export default class AusMap extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
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

                    { map }

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
