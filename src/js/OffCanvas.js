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
          <div>
            <h1>About</h1>
            <p>Quickly sort through Australia’s federal parliamentarians, and find out where they sit on this issues that matter to you.</p>
          </div>
        )
      } else if (this.state.currentContent = 'Credits') {
        return (
          <div>
            <h1>Credits</h1>
            <p>Built by Vanessa Dwyer, Marc Bowditch, and Brett Snaidero. First begun as a project at Hackagong 2015.</p>
            <h2>Thanks To</h2>
            <p><img src="img/content/theyvoteforyou-logo.png" /><a href="https://theyvoteforyou.org.au/" title="They Vote For You Website">They Vote For You</a>, for public data. Inspired by You Know Nothing, by Pierre Georges. Guy Watson, for server help.</p>
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
                <div className="basic-content">
                    { this.aboutContent() }
                </div>
            </Modal>
          </div>
        )
    }
}
