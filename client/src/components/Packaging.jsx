import React from 'react';
import Modal from './Modal.jsx';

class Packaging extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productInformation: {},
            clicked: false
        };
        this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        });
    }
    static getDerivedStateFromProps(props, state) {
        return {
            productInformation: props.item,
            clicked: false
        }
    }
    render() {
        return (
            <div >
                <div onClick={() => this.handleClick()} >Sustainability &amp; environment</div>
                <a id='arrow' />
                <div>
                    <div>Import and render packaging object</div>
                </div>
            </div>

        )
    }
}

export default Packaging;
