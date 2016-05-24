import React from 'react';
import PopupMap from './PopupMap';
import {PropTypes} from 'react';

class PoliticianPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            response: undefined,
            politicianId: '',

            offices: '',
            voteHistory: '',
            classType: ''
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
                response: undefined,
                politicianId: politicianId
            });

            $.ajax({
                type: 'GET',
                // url: 'http://theyvoteforyou.org.au/api/v1/people/' + politicianId + '.json?key=s1d5YuLp2cEI%2FG%2B9NK8i',
                url: '../proxy/crossproxy-individuals.php',
                data: {
                    userID: this.props.politicianId
                },
                dataType: 'json',
                success: function(data){
                    // Positions
                    var offices = '';
                    if (0 > 0) {
                        // for (var i = 0; i < this.state.response.offices.length; ++i) {
                        //     offices += this.state.response.offices[i].position;
                        //     if (i !== this.state.response.offices.length - 1) {
                        //         offices += ' / ';
                        //     }
                        // }
                    } else {
                        offices = "No position currently held";
                    }

                    console.log(data);

                    // Get three random votes
                    var voteHistory = '';
                    var voteHistory = self.createRandomVotes(
                      data.policy_comparisons,
                      data.id
                    );
                    var classType = '';
                    switch(data.latest_member.party) {
                        case "Liberal Party":
                            classType = "lib";
                        break;
                        case "Australian Labor Party":
                            classType = "lab";
                        break;
                        case "Australian Greens":
                            classType = "greens";
                        break;
                        case "National Party":
                            classType = "nats";
                        break;
                        case "Independent":
                            classType = "indep";
                        break;
                        case "Liberal Democratic Party":
                            classType = "libdem";
                        break;
                        case "Palmer United Party":
                            classType = "palmer";
                        break;
                        default:
                            classType ='other';
                    }
                    self.setState({
                        response: data,
                        classType: classType,
                        voteHistory: voteHistory,
                        offices: offices
                    });
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
            // Get a random issue
            var numberCrazy = Math.floor((Math.random() * 30) + 1);
            // Dunno
            // var percent = Math.abs(data[numberCrazy].agreement);
            var i = 1;

            var deg = 360 * data[i].agreement / 100;

            var yaynay;
            var believe;
            var moreThan = '';

            if(data[i].agreement > 50) {
              yaynay = data[i].agreement + "% in favour of ";
              believe = "believe";
              moreThan = "for";
            } else if (data[i].agreement < 50) {
              yaynay = data[i].agreement + "% against ";
              believe = "do not believe";
              moreThan = "against";
            } else if (data[i].agreement = 50) {
              yaynay= "Has never voted on ";
              moreThan = "neutral";
            } else {
              console.log("Might need to rethink these");
            }

            return (
              <div className={"issue clearfix " + moreThan}>
                  <div className={"progress-pie-chart " + moreThan} data-percent="0">
                      <div className="ppc-progress">
                          <div className="ppc-progress-fill" style={{transform: "rotate(" + deg + "deg)"}}></div>
                      </div>
                      <div className="ppc-percents">
                          <div className="pcc-percents-wrapper">
                              <span>{ data[i].agreement }%</span>
                          </div>
                      </div>
                  </div>
                  <div className="issue-title">{ yaynay } { data[i].policy.name }</div>
                  {/*<div className="issue-description"> data[i].policy.description </div> */}
              </div>
            )
        }


    }

    render(props) {
        // Handle case where the response is not here yet
        if ( !this.state.response ) {
            return (
                <div>
                  <div className="loading-popup">
                      <div className="loading">
                          <p>Loading...</p>
                          <div className="spin"></div>
                      </div>
                  </div>
                </div>
            )
        }

        // Gives you the opportunity to handle the case where the ajax request completed but the result array is empty
        if ( this.state.response.length === 0 ) {
            return (
                <div>
                  <div className="politician-popup">No result found for this subscription</div>
                </div>
            )
        }

        return (
            <div>
                <div className="politician-popup">
                  <div className="pol-title">
                      <div className={"party " + this.state.classType}>{ this.state.response.latest_member.party }</div>
                      <div className="name">{ this.state.response.latest_member.name.first } { this.state.response.latest_member.name.last }</div>
                  </div>
                  <div className="pol-info clearfix">
                    <div className="pop-image" style={{backgroundImage: "url(../img/photos/" + this.state.response.id + ".jpg)"}}>
                        <div className="overlay">
                            <div className="house">{ this.state.response.latest_member.house }</div>
                            <div className="positions">{ this.state.offices }</div>
                        </div>
                    </div>
                    <div className="pop-content">
                      <div className="vote-history">
                        { this.state.voteHistory }
                      </div>
                      {/*
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
                      */}
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
