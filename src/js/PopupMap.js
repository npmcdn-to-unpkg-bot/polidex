// Import React and HelloText class
import React from 'react';
import PopupRepresentatives from './mapviews/popup-representatives';
import PopupSenate from './mapviews/popup-senate';

// Create class called WelcomeScreen that extends the base React Component class
class PopupMap extends React.Component {
    componentDidMount() {
        console.log( this.props.polId );
    }

    render(props) {
        if ( this.props.mapArea == 'representatives' ) {
          return (
            <div className="popup-map">
                <div className="photo" style={{ backgroundImage: 'url(img/content/houseofreps-big.jpg)' }}></div>
                <div className="house">
                    <div className="house-title">Votes in the <span>House Of Representatives</span></div>
                    <PopupRepresentatives
                      polId={ this.props.polId }
                    />
                </div>
            </div>
          )
        } else if ( this.props.mapArea == 'senate' ) {
          return (
            <div className="popup-map">
                <div className="photo" style={{ backgroundImage: 'url(img/content/senate-big.jpg)' }}></div>
                <div className="house">
                  <div className="house-title">Votes in the <span>Senate</span></div>
                  <PopupSenate
                    polId={ this.props.polId }
                  />
              </div>
            </div>
          )
        } else {
          return (
              <div>{ this.props.mapArea }</div>
          )
        }
    }
}

PopupMap.propTypes = {
    mapArea: React.PropTypes.string,
    polId: React.PropTypes.string
};

PopupMap.defaultProps = {
};

export default PopupMap;
