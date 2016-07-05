// Import React and HelloText class
import React from 'react';
import {PropTypes} from 'react';

// Create class called WelcomeScreen that extends the base React Component class
class VoteHistory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            politicianId: '',

            offices: '',
            voteHistory: '',
            voteHistoryFiltered: '',
            classType: '',

            openPolicy: '',
            isPolicyOpen: ''
        };
    }

    componentDidMount() {
        // Get vote history
        var voteHistory = '';
        voteHistory = this.createVoteHistory(
            this.props.response.policy_comparisons,
            this.props.response.id
        );

        this.setState({
            voteHistory: voteHistory,
            voteHistoryFiltered: voteHistory
        });
    }

    createVoteHistory(data, memId) {
        var self = this;
        var voteHistory = Object.keys(data).map( function(key) {
            var yaynay, believe, moreThan, thumb;

            if(data[key].agreement >= 50) {
                thumb = 'up';
            } else {
                thumb = 'down';
            }

            if(data[key].agreement >= 80) {
                yaynay = "Strongly in favour of ";
                believe = "believe";
                moreThan = "strongfor";
            } else if (data[key].agreement >= 60 && data[key].agreement < 80) {
                yaynay = "In favour of ";
                believe = "believe";
                moreThan = "for";
            } else if (data[key].agreement >= 40 && data[key].agreement < 60) {
                yaynay = "Neutral on ";
                believe = "neutral";
                moreThan = "neutral";
            } else if (data[key].agreement >= 20 && data[key].agreement < 40) {
                yaynay = "Against ";
                believe = "do not believe";
                moreThan = "against";
            } else if (data[key].agreement >= 0 && data[key].agreement < 20) {
                yaynay = "Strongly against ";
                believe = "do not believe";
                moreThan = "strongagainst";
            }

            return (
                <div key={key}>
                    <a onClick={self.clickIssue.bind(self)} data-id={data[key].policy.id} className={"issue clearfix " + moreThan} href="#">
                        <div className="issue-title">
                            <svg>
                                <use href={"img/sprite.svg#thumb-" + thumb} />
                            </svg>
                            { yaynay }
                            { data[key].policy.name }
                        </div>
                    </a>
                    <div id={"policy-" + data[key].policy.id}></div>
                </div>
            );
        });

        return ( voteHistory );
    }

    handleSearch(e) {
        const searchCondition = new RegExp(e.target.value, 'i');
        var filtered = this.state.voteHistory.filter( function(datum) {
            return (
                datum.props.children.props.children.props.children[2].search(searchCondition) > -1
            );
        });
        if ( filtered.length < 1 ) {
            filtered = <div className="put"><div className="message">No results match your search query, please try again.</div></div>;
        }
        this.setState({
            voteHistoryFiltered: filtered
        });
    }

    closePolicy() {
        this.setState({
            openPolicy: '',
            isPolicyOpen: ''
        });
    }

    clickIssue(e) {
        e.preventDefault();
        var self = this;

        var loading = [
            <div className="policy-comparison-loading">
                <div className="loading">
                    <div className="spin"></div>
                </div>
            </div>
        ];

        self.setState({
            openPolicy: loading,
            isPolicyOpen: 'comparison-active'
        });

        var policyID = e.currentTarget.getAttribute('data-id');

        $.ajax({
            type: 'GET',
            url: '../../proxy/crossproxy-policies.php',
            data: {
                policyID: policyID
            },
            dataType: 'json',
            success: function(data){
                var openPolicy = self.createPolicy(data);

                // var thing = document.getElementById('policy-' + policyID);
                // thing.innerHTML = "Paragraph changed!";

                self.setState({
                    openPolicy: openPolicy
                });
            },
            error: function(xhr, status, error) {
                var err = eval("(" + xhr.responseText + ")");
                console.log(err.Message);
            }
        });
    }

    createPolicy(data) {
        var pro = [];
        var against = [];
        var neutral = [];
        for(var i = 0; i < data.people_comparisons.length; i++) {
          var agreement = parseInt(data.people_comparisons[i].agreement);
          if ( agreement > 50 ) {
              pro.push(
                <div
                  className="person"
                  style={{
                    backgroundImage: "url(../img/photos/" + data.people_comparisons[i].person.id + ".jpg)"
                  }}
                  title={data.people_comparisons[i].person.latest_member.name.first + ' ' + data.people_comparisons[i].person.latest_member.name.last}
                />
              );
          } else if ( agreement == 50 ) {
              neutral.push(
                <div
                  className="person"
                  style={{
                    backgroundImage: "url(../img/photos/" + data.people_comparisons[i].person.id + ".jpg)"
                  }}
                  title={data.people_comparisons[i].person.latest_member.name.first + ' ' + data.people_comparisons[i].person.latest_member.name.last}
                />
              );
          } else if ( agreement < 50 ) {
              against.push(
                <div
                  className="person"
                  style={{
                    backgroundImage: "url(../img/photos/" + data.people_comparisons[i].person.id + ".jpg)"
                  }}
                  title={data.people_comparisons[i].person.latest_member.name.first + ' ' + data.people_comparisons[i].person.latest_member.name.last}
                />
              );
          }
        }

        return (
          <div className="policy-info">
            <button className="close-policy" onClick={this.closePolicy.bind(this)}>Close</button>
              <div className="policy-title">{ data.name }</div>
              <div className="policy-description">{ data.description }</div>
              <div className="others for clearfix">
                  <div className="which">For:</div>
                  <div>{ pro }</div>
              </div>
              <div className="others neutral clearfix">
                  <div className="which">Neutral:</div>
                  <div>{ neutral }</div>
              </div>
              <div className="others against clearfix">
                  <div className="which">Against:</div>
                  <div>{ against }</div>
              </div>
              <div className="linkto">
                <a href={"https://theyvoteforyou.org.au/policies/" + data.id} title={"See more information on " + data.name}>See more information on this policy at They Vote For You</a>
              </div>
          </div>
        )
    }



    render(props) {
        const voteHistory = this.state.voteHistoryFiltered;
        const openPolicy = this.state.openPolicy;
        return (
            <div className="pop-content">
                <div className={"vote-history clearfix " + this.state.isPolicyOpen}>

                    <div className="policies">
                        <div className="intro">Search for policies below. Click/tap a policy to find out more about it. Thanks to <a href="https://theyvoteforyou.org.au/" title="They Vote For You">They Vote For You</a> for the voting data.</div>
                        <div className="search">
                            <input onChange={ this.handleSearch.bind(this) } type="search" placeholder="Search voting history..." />
                        </div>
                        <div className="votes">
                            { voteHistory }
                        </div>
                    </div>

                    <div className="policy-comparison">
                        { openPolicy }
                    </div>

                </div>
            </div>
        )
    }
}

VoteHistory.propTypes = {
    polId: React.PropTypes.string,
    response: React.PropTypes.object,
    classType: React.PropTypes.string
};

VoteHistory.defaultProps = {
};

export default VoteHistory;
