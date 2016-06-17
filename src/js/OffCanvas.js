import React from 'react';
import Modal from '../../bower_components/react-modal/lib/index';

// Modal Style
const customStyles = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 0, 0.5)',
        zIndex            : 3,
        overflowY         : 'auto'
    },
    content : {
        display               : 'table',
        width                 : '100%',
        height                : '100%',
        position              : 'static',
        background            : 'none',
        top                   : 'auto',
        left                  : 'auto',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '0px',
        transform             : 'none',
        border                : 'none',
        padding               : '0px',
        pointerEvents         : 'none'
    }
};

export default class OffCanvas extends React.Component {
    constructor() {
        super();

        this.state = {
            currentContent: '',
            modalIsOpen: false
        }
    }

    openModal(e) {
        var content = e.target.innerHTML;
        this.setState({
            currentContent: content,
            modalIsOpen: true
        });
    }

    afterOpenModal() {
    }

    closeModal() {
        this.setState({
            currentContent: '',
            modalIsOpen: false
        });
    }

    aboutContent() {
      if (this.state.currentContent == 'About') {
        return (
          <div className="basic-content">
            <h1>About &amp; History</h1>
            <p>Quickly sort through Australia’s federal parliamentarians, and find out where they sit on the issues that matter to you.</p>
            <h2>How did it start?</h2>
            <p>Polidex started as a project at <a href="http://www.hackagong.com/" title="Hackagong Website">Hackagong</a> 2015, a hackathon organised in Wollongong.</p>
            <h2>Who Built This?</h2>
            <p>The site was designed and developed by <a href="http://brettsnaidero.com" title="Brett's Website">Brett Snaidero</a>, Vanessa Dwyer, and Marc Bowditch. Thanks also to Guy Watson, Michael Caruana, and Jason Zhang for their help with some of the tricky bits.</p>
            <h2>How Was It Built?</h2>
            <p>The site source code is available to peruse (or pull apart) on <a href="https://github.com/brettsnaidero/polidex" title="Polidex on Github">Github</a>.</p>
            <h2>Feedback &amp; Questions</h2>
            <p>We’re still adding features and polishing the site, but we’d love to hear from you if you have suggestions about the site for us! The best way to reach out at the moment is through our <a href="https://www.facebook.com/Polidex-237389349974076/" title="Polidex on Facebook">Facebook page</a>.</p>
          </div>
        )
      } else if (this.state.currentContent = 'Credits') {
        return (
        <div className="basic-content">
            <h1>Credits</h1>
            <p>We took inspiration from the fantastic site <a href="https://web.archive.org/web/20141015082555/http://you-know-nothing.com/">You Know Nothing</a>, by Pierre Georges.</p>
            <h2>Politician Data: They Vote For You</h2>
            <p><img src="img/content/theyvoteforyou-logo.png" />Most of the political data is pulled from <a href="https://theyvoteforyou.org.au/" title="They Vote For You Website">They Vote For You</a>, a public data source generously made available by the OpenAustralia Foundation.</p>
            <h2>Australian electorate and states data</h2>
            <p>We sourced the geospatial data from the <a href="http://www.aec.gov.au/electorates/maps.htm" title="AEC Maps">Australian Electoral Commission</a>, which makes the current federal electoral divisions available for use. Thanks also to <a href="http://www.mapshaper.org/" title="Simplify and edit GeoJSON">Map Shaper</a>, an online service I used to simplify the GeoJSON data I was working with.</p>
        </div>
        )
      }
    }

    render() {
        return (
          <div>
            <nav className="pushy pushy-left">
              <ul>
                <li className="pushy-link">
                  <button className="close">
                    <span className="one"></span>
                    <span className="two"></span>
                    Close Menu
                  </button>
                </li>
                <li className="pushy-link"><a onClick={ this.openModal.bind(this) } href="#">About</a></li>
                <li className="pushy-link"><a onClick={ this.openModal.bind(this) } href="#">Credits</a></li>
              </ul>
            </nav>

            <Modal
                isOpen={ this.state.modalIsOpen }
                onAfterOpen={ this.afterOpenModal.bind(this) }
                onRequestClose={ this.closeModal.bind(this) }
                style={ customStyles }
            >
                <button className="close" onClick={ this.closeModal.bind(this) }>Close</button>
                <div className="popup-holder">
                    { this.aboutContent() }
                </div>
            </Modal>
          </div>
        )
    }
}
