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
            classType: ''
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
        // How many votes to display
        var value = data.length;

        var voteHistory = [];
        for (var i = 0; i < value; i++) {
            // Get a random issue
            var numberCrazy = Math.floor((Math.random() * 30) + 1);
            var b = i;

            var deg = 360 * data[b].agreement / 100;

            var yaynay;
            var believe;
            var moreThan = '';
            var thumb = '';

            if(data[b].agreement >= 50) {
                thumb = 'up';
            } else {
                thumb = 'down';
            }

            if(data[b].agreement >= 80) {
              yaynay = "Strongly in favour of ";
              believe = "believe";
              moreThan = "strongfor";
            } else if (data[b].agreement >= 60 && data[b].agreement < 80) {
              yaynay = "In favour of ";
              believe = "believe";
              moreThan = "for";
            } else if (data[b].agreement >= 40 && data[b].agreement < 60) {
              yaynay = "Neutral on ";
              believe = "neutral";
              moreThan = "neutral";
            } else if (data[b].agreement >= 20 && data[b].agreement < 40) {
              yaynay = "Against ";
              believe = "do not believe";
              moreThan = "against";
            } else if (data[b].agreement >= 0 && data[b].agreement < 20) {
              yaynay = "Strongly against ";
              believe = "do not believe";
              moreThan = "strongagainst";
            } else {
            }

            voteHistory.push(
              <a onClick={this.clickIssue} data-id={data[b].policy.id} className={"issue clearfix " + moreThan} key={i} href="#">
                  <div className="issue-title">
                      <svg>
                        <use href={"img/sprite.svg#thumb-" + thumb} />
                      </svg>
                      { yaynay }
                      { data[b].policy.name }
                  </div>
                  {/*<div className="issue-description"> data[b].policy.description </div> */}
              </a>
            );
        }
        return (
          <div>
            { voteHistory }
          </div>
        )
    }

    handleSearch(e) {
        const searchCondition = new RegExp(e.target.value, 'i');
        var filtered = this.state.voteHistory.props.children.filter( function(datum) {
            return (
              datum.props.children.props.children[2].search(searchCondition) > -1
            );
        });
        if ( filtered.length < 1 ) {
            filtered = <div className="put"><div className="message">No results match your search query, please try again.</div></div>;
        }
        this.setState({
            voteHistoryFiltered: filtered
        });
    }

    clickIssue(e) {
        e.preventDefault;
        console.log(e);
        var policyID = e.target.getAttribute('data-id');
        // Show issue details and comparison
        console.log(policyID);

        // https://theyvoteforyou.org.au/api/v1/policies/[id].json?key=[api_key]
        $.ajax({
            type: 'GET',
            url: '../../proxy/crossproxy-policies.php',
            data: {
                policyID: policyID
            },
            dataType: 'json',
            success: function(data){
                console.log(data);
            },
            error: function(xhr, status, error) {
              var err = eval("(" + xhr.responseText + ")");
              console.log(err.Message);
            }
        });
    }

    render(props) {
        const voteHistory = this.state.voteHistoryFiltered;
        return (
            <div className="pop-content">
              <div className="vote-history">
                {/* <div className="title">Voting History</div> */}
                <div className="search">
                  <input onChange={ this.handleSearch.bind(this) } type="search" placeholder="Search voting history..." />
                </div>
                { voteHistory }
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
