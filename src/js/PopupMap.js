// Import React and HelloText class
import React from 'react';
import PopupRepresentatives from './mapviews/popup-representatives';
import PopupSenate from './mapviews/popup-senate';

// Create class called WelcomeScreen that extends the base React Component class
class PopupMap extends React.Component {
    render(props) {
        if ( this.props.mapArea == 'representatives' ) {
          return (
            <div>
                <div>In the <span>House Of Representatives</span></div>
                <PopupRepresentatives
                />
            </div>
          )
        } else if ( this.props.mapArea == 'senate' ) {
          return (
            <div>
                <div>In the <span>Senate</span></div>
                <PopupSenate
                />
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
    mapArea: React.PropTypes.string
};

PopupMap.defaultProps = {
};

export default PopupMap;
