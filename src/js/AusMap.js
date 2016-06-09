import React from 'react';
import Header from './Header';
import OffCanvas from './OffCanvas';
import ElectorateMap from './ElectorateMap';

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
                    <ElectorateMap
                        markers={this.state.markers}
                        onMapClick={::this._handle_map_click}
                    />
                </div>

              </div>
            </div>
          </div>
        )
    }
}
