// Import React
import React from 'react';
import PoliticianPopup from './PoliticianPopup';
import Modal from '../../node_modules/react-modal/lib/index';

// Modal Style
const customStyles = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(16, 41, 59, 0.5)'
    },
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        border                : 'none',
        overflow              : 'visible'
    }
};

// Create class called PoliticianPokedex that extends the base React Component class
class PoliticianPokedex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentModal: '0',
            modalIsOpen: false,

            nameThis: [],
            filteredList: []
        };
    }

    // handleSearch = (e) => {
    handleSearch(e) {
        const condition = new RegExp(e.target.value, 'i');
        const filtered = this.state.nameThis.filter( function(datum) {
            return ( datum.name.search(condition) > -1 );
        });

        this.setState({
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
                // Party class
                partyClass: classType
            };
          });
          self.setState({
            nameThis: politicians,
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
        const politicians = plts.map( function(plt,i) {
            return (
              <li className={ plt.partyClass } key={i} onClick={ this.openModal.bind(this) } tabindex="1" data-id={plt.id}>
                <div className="pol-image"  style={{backgroundImage: "url(../../img/photos/" + plt.id + ".jpg)"}}>
                  <div className="overlay"></div>
                </div>
                <div className="description">
                    <div className="name">
                      {plt.name}
                    </div>
                    <div className="party">
                      {plt.party}
                      {/* plt.electorate */}
                    </div>
                </div>
              </li>
            )
        }, this);

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
                                    />
                                    <button className="go">Search</button>
                                </div>
                                <div className="sort-by filters">
                                    <div className="label">Showing</div>
                                    <div className="select-party">
                                        <button className="selected-party">All Parties</button>
                                        <div className="options">
                                            <button className="sort btn" data-sort="name">All Parties</button>
                                            <button className="sort btn" data-sort="name">Liberal Party</button>
                                            <button className="sort btn" data-sort="category">Labor Party</button>
                                            <button className="sort btn" data-sort="category">Greens Party</button>
                                        </div>
                                    </div>
                                </div>
                                <ul className="filter filters">
                                    <li className="btn selected">Sort by Name</li>
                                    <li className="btn">Sort by Party</li>
                                </ul>
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
