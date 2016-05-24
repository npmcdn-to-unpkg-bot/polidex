import React from 'react';
import PoliticianPopup from './PoliticianPopup';
import Modal from '../../bower_components/react-modal/lib/index';

// Modal Style
const customStyles = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(16, 41, 59, 0.5)',
        zIndex            : '3'
    },
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        border                : 'none',
        overflow              : 'visible',
        padding               : '0px',
        borderRadius          : '5px',
        background            : 'none'
    }
};

class PoliticianPokedex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentModal: '0',
            modalIsOpen: false,

            filterPartySelected: '',
            filterHouseSelected: '',

            unfilteredList: [],
            filteredList: []
        };
    }

    // handleSearch = (e) => {
    handleSearch(e) {
        const searchCondition = new RegExp(this.searchField.value, 'i');
        const partyCondition = new RegExp(this.partyField.value, 'i');
        const houseCondition = new RegExp(this.houseField.value, 'i');

        const filtered = this.state.unfilteredList.filter( function(datum) {
            return (
              datum.name.search(searchCondition) > -1
            );
        }).filter( function(datum) {
            return (
              datum.party.search(partyCondition) > -1
            );
        }).filter( function(datum) {
            return (
              datum.house.search(houseCondition) > -1
            );
        });

        this.setState({
            filterPartySelected: this.partyField.value,
            filterHouseSelected: this.houseField.value,
            filteredList: filtered
        });
    }

    openModal(e) {
        var number = e.currentTarget.getAttribute('data-id');

        this.setState({
            currentModal: number,
            modalIsOpen: true
        });
    }

    afterOpenModal() {
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }

    componentDidMount () {
        var self = this;
        $.get("../knowledge/people.json", function(result) {
          var collection = result;

          var politicians = collection.map( function(p) {
            var classType = '';
            switch(p.latest_member.party) {
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

            return {
                id: p.id,
                // Name
                name: p.latest_member.name.first + " " + p.latest_member.name.last,
                // Political Party
                party: p.latest_member.party,
                // Electorate
                electorate: p.latest_member.electorate,
                // House
                house: p.latest_member.house,
                // Party class
                partyClass: classType
            };
          });
          self.setState({
            unfilteredList: politicians,
            filteredList: politicians
          });
        }.bind(this));
    }

    componentWillUnmount () {
        this.serverRequest.abort();
    }

    render() {
        // Politicians
        var plts = this.state.filteredList || [];
        var politicians = '';
        if (plts.length > 0) {
          politicians = plts.map( function(plt,i) {
              return (
                <li className={ plt.partyClass } key={i} onClick={ this.openModal.bind(this) } tabindex="1" data-id={ plt.id }>
                  <div className="pol-image"  style={{backgroundImage: "url(../../img/photos/" + plt.id + ".jpg)"}}>
                    <div className="overlay"></div>
                  </div>
                  <div className="description">
                      <div className="name">
                        {plt.name}
                      </div>
                      <div className="party">
                        {plt.party}
                        {/* plt.house */}
                      </div>
                  </div>
                </li>
              )
          }, this);
        } else {
          politicians = function() {
            return (
              <li>No Results</li>
            );
          }
        }

        return (
            <div>
                <section className="politicians">
                    <div id="PoliticianContainer">
                        <div className="banner">
                            <div className="overlay clearfix">
                                <div className="field search-field">
                                    <input
                                        className="search"
                                        placeholder="Search politicians names..."
                                        onChange={ this.handleSearch.bind(this) }
                                        ref={(ref) => this.searchField = ref}
                                    />
                                </div>
                                <div className="sort-by">
                                    <div className="select-party">
                                        <div className="cs-select cs-skin-elastic">
                                            <select ref={(ref) => this.partyField = ref} value={ this.state.filterPartySelected } className="cs-select cs-skin-elastic" onChange={ this.handleSearch.bind(this) }>
                                                <option value="" defaultValue>All Parties</option>
                                                <option className="lib" value="Liberal">Liberal Party</option>
                                                <option className="lab" value="Labor">Australian Labor Party</option>
                                                <option className="greens" value="Greens">Australian Greens</option>
                                                <option className="" value="Independent">Independents</option>
                                                <option className="" value="National">National Party</option>
                                                <option className="" value="CWM">CWM</option>
                                                <option className="" value="Palmer">Palmer United Party</option>
                                                <option className="" value="Country">Country Liberal Party</option>
                                                <option className="" value="Liberal Democratic">Liberal Democratic Party</option>
                                                <option className="" value="Family">Family First Party</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="sort-by">
                                    <div className="select-party">
                                        <div className="cs-select cs-skin-elastic">
                                            <select ref={(ref) => this.houseField = ref} value={ this.state.filterHouseSelected } className="cs-select cs-skin-elastic" onChange={ this.handleSearch.bind(this) }>
                                                <option value="" defaultValue>Both Houses</option>
                                                <option className="rep" value="Representatives">House Of Representatives</option>
                                                <option className="sen" value="Senate">Senate</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="listed-politicians" id="poledex">
                            { politicians }
                        </ul>
                    </div>
                </section>

                <Modal
                    isOpen={ this.state.modalIsOpen }
                    onAfterOpen={ this.afterOpenModal.bind(this) }
                    onRequestClose={ this.closeModal.bind(this) }
                    style={ customStyles }
                >
                    <button className="close" onClick={ this.closeModal.bind(this) }>Close</button>
                    <PoliticianPopup
                        politicianId={ this.state.currentModal }
                    />
                </Modal>
            </div>
        )
    }
}

PoliticianPokedex.propTypes = {

};

PoliticianPokedex.defaultProps = {

};

export default PoliticianPokedex;
