import React from 'react';
import VoteHistory from './popuptabs/VoteHistory';
import PopupMap from './popuptabs/PopupMap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {PropTypes} from 'react';

class PoliticianPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            response: undefined,
            politicianId: '',

            offices: '',
            voteHistory: '',
            voteHistoryFiltered: '',
            classType: ''
        };
    }

    handleSelect(index, last) {
        // console.log('Selected tab: ' + index + ', Last tab: ' + last);
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
                    var officeClass = 'no';
                    if (data.offices.length > 0) {
                        officeClass = 'yes';
                        for (var i = 0; i < data.offices.length; ++i) {
                            offices += data.offices[i].position;
                            if (i !== data.offices.length - 1) {
                                offices += ' / ';
                            }
                        }
                    } else {
                        offices = "No position currently held";
                    }

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
                        case "CWM":
                            classType = "cwm";
                        break;
                        case "Country Liberal Party":
                            classType = "country";
                        break;
                        case "Family First Party":
                            classType = "familyfirst";
                        break;
                        case "Australian Motoring Enthusiast Party":
                            classType = "motoring";
                        break;
                        case "Liberal National Party":
                            classType = "libnat";
                        break;
                        default:
                            classType ='other';
                    }

                    // Get three random votes
                    // var voteHistory = '';
                    // var voteHistory = self.createVoteHistory(
                    //   data.policy_comparisons,
                    //   data.id
                    // );

                    self.setState({
                        response: data,
                        classType: classType,
                        offices: offices,
                        officeClass: officeClass
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

    handleSearch(e) {
        const searchCondition = new RegExp(e.target.value, 'i');
        console.log(this.state.voteHistory.props.children);
        var filtered = this.state.voteHistory.props.children.filter( function(datum) {
            console.log(datum);
            return (
              datum.props.children.props.children[2].search(searchCondition) > -1
            );
        });
        console.log(filtered);
        if ( filtered.length < 1 ) {
            filtered = <div className="put"><div className="message">No results match your search query, please try again.</div></div>;
        }

        this.setState({
            voteHistoryFiltered: filtered
        });
    }

    render(props) {
        // Handle case where the response is not here yet
        if ( !this.state.response ) {
            return (
                <div className="popup-holder">
                  <div className="loading-popup">
                      <div className="loading">
                          {/* <p>Loading...</p> */}
                          <div className="spin"></div>
                      </div>
                  </div>
                </div>
            )
        }

        // Gives you the opportunity to handle the case where the ajax request completed but the result array is empty
        if ( this.state.response.length === 0 ) {
            return (
                <div className="popup-holder">
                  <div className="politician-popup">Sorry, no result found for this politician.</div>
                </div>
            )
        }

        return (
            <div className="popup-holder">
                <div className="politician-popup">
                  <div className="pol-title clearfix">
                      <div className={"party " + this.state.classType}>{ this.state.response.latest_member.party }</div>
                      <div className="name">{ this.state.response.latest_member.name.first } { this.state.response.latest_member.name.last }</div>
                      <div className="electorate">Representative for { this.state.response.latest_member.electorate }</div>
                  </div>
                  <div className="pol-info clearfix">
                    <div className="pop-image-holder">
                        <div className="pop-image" style={{backgroundImage: "url(../img/photos/" + this.state.response.id + ".jpg)"}}>
                            <div className="overlay"></div>
                        </div>
                        <PopupMap
                            mapArea={ this.state.response.latest_member.house }
                            polId={ this.props.politicianId }
                        />
                        <div className="positions">{ this.state.offices }</div>
                    </div>
                    <VoteHistory
                        polId={ this.props.politicianId }
                        response={ this.state.response }
                        classType={ this.state.classType }
                        voteHistory={ this.state.voteHistory }
                    />
                    {/*
                    <Tabs
                        onSelect={this.handleSelect}
                        selectedIndex={0}
                    >
                        <TabList>
                            <Tab>Voting History</Tab>
                            <Tab>What { this.state.response.latest_member.name.first } { this.state.response.latest_member.name.last } Does</Tab>
                        </TabList>
                        <TabPanel>

                        </TabPanel>
                        <TabPanel>
                            <div>
                                { this.state.response.latest_member.name.first } { this.state.response.latest_member.name.last } is a federal politician who sits in the { this.state.response.latest_member.house }
                            </div>
                        </TabPanel>
                    </Tabs>
                    */}
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
