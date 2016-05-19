import React from 'react';
import PopupMap from './PopupMap';
import {PropTypes} from 'react';

class PoliticianPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            response: undefined,
            politicianId: ''
        };
    }

    loadPoliticianData(politicianId) {
        var self = this;

        // You probably want to redo the ajax request only when the politicianId has changed (I guess?)
        var politicianIdHasChanged = (this.state.politicianId !== politicianId);

        if ( politicianIdHasChanged ) {
            // Not required, but can be useful if you want to provide the user
            // immediate feedback and erase the existing content before
            // the new response has been loaded
            this.setState({
                response: undefined
            });

            $.ajax({
                type: 'GET',
                url: '../knowledge/individuals/10001.json',
                // data: {
                //     politicianId: politicianId
                // },
                success: function(data){
                    console.log('Success');

                    if ( self.props.politicianId === politicianId ) {
                        self.setState({
                            response: data
                        });
                    }
                },
                error: function(xhr, status, error) {
                  var err = eval("(" + xhr.responseText + ")");
                  console.log(err.Message);
                }
            });
        }
    }

    componentDidMount() {
        this.loadPoliticianData(this.props.politicianId);
    }

    componentWillUnmount() {
        this.loadPoliticianData(this.props.politicianId);
    }

    componentWillReceiveProps(nextProps) {
        this.loadPoliticianData(nextProps.politicianId);
    }

    createRandomVotes(data, memId) {
        // How many votes to display
        var value = 4;
        if (data.length <= value) {
            value = data.length;
        }

        for (var i = 0; i < value; i++) {
            var numberCrazy = Math.floor((Math.random() * 30) + 1);
            var id = 'issue'+i+memId;
            var percent = Math.abs(data[numberCrazy].agreement-50);
            var circle = (percent * 3.6);

            var yaynay;
            var believe;

            if(data[i].agreement > 50) {
                yaynay = "Voted <span>in favour</span> of ";
                believe = "believe";
            } else if (data[i].agreement < 50) {
                yaynay = "Voted <span>against</span> ";
                believe = "do not believe";
            } else if (data[i].agreement = 50) {
                yaynay= "Has never voted on ";
            } else {
                console.log("Might need to rethink these");
            }
        }

        return (
          <div className="issue">
            <div className="issue-title">{ data[1].policy.name }</div>
            <div className="issue-description">{ data[1].policy.description }</div>
            <div className="issue-agreement">{ data[1].agreement }</div>
            <div>{ data[1].voted }</div>
          </div>
        )
    }

    render(props) {
        // Handle case where the response is not here yet
        if ( !this.state.response ) {
            return (
                <div>Loading...</div>
            )
        }

        // Gives you the opportunity to handle the case where the ajax request completed but the result array is empty
        if ( this.state.response.length === 0 ) {
            return (
                <div>No result found for this subscription</div>
            )
        }

        // Positions
        var offices = '';
        if (this.state.response.offices.length > 0) {
            for (var i = 0; i < this.state.response.offices.length; ++i) {
                offices += this.state.response.offices[i].position;
                if (i !== this.state.response.offices.length - 1) {
                    offices += ' / ';
                }
            }
        } else {
            offices = "No position currently held";
        }

        // Get three random votes
        var voteHistory = this.createRandomVotes(  this.state.response.policy_comparisons, this.state.response.id );

        return (
            <div>
                <div className="politician-popup">
                  <div className="pop-image" style={{backgroundImage: "url(../img/photos/" + this.state.response.id + ".jpg)"}}>
                  </div>
                  <div className="pop-content">
                    <div className="name">{ this.state.response.latest_member.name.first } { this.state.response.latest_member.name.last }</div>
                    <div className="party">{ this.state.response.latest_member.party }</div>
                    <div className="positions">{ offices }</div>
                    <div className="vote-history">
                      { voteHistory }
                    </div>
                    <div className="map-area">
                        <div className="house">
                          <PopupMap
                            mapArea={ this.state.response.latest_member.house }
                          />
                        </div>
                        <div className="electorate">
                          { this.state.response.latest_member.electorate }
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }

}

PoliticianPopup.propTypes = {
    politicianId: React.PropTypes.string
};

PoliticianPopup.defaultProps = {
};

export default PoliticianPopup;
