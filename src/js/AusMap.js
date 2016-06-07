import React from 'react';
import PoliticianPokedex from './PoliticianPokedex';
import Header from './Header';
import OffCanvas from './OffCanvas';

// import assign from 'object-assign';
// import r from 'r-dom';
// import Immutable from 'immutable';
// import alphaify from 'alphaify';

import { MapGL } from '../../node_modules/react-map-gl/dist/index';
// import { ScatterplotOverlay } from '../../node_modules/react-map-gl/src/overlays/scatterplot.react';
// import SVGOverlay from '../../node_modules/react-map-gl/src/overlays/svg.react';



export default class AusMap extends React.Component {
    constructor(props) {
        super(props);
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

                        <MapGL
                          width={700}
                          height={450}
                          latitude={37.78}
                          longitude={-122.45}
                          zoom={11}
                          mapStyle={mapStyle}
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
