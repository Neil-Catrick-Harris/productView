import React from 'react';
import styles from '../styled.js';
import SizeDetails from './SizeDetails.jsx';
import  Modal from './Modal.jsx';

class Sizes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    handleClick() {
        this.setState({clicked: !this.state.clicked});
    }

    render() {
        return (
            <div>
                <div onClick={() => this.handleClick()}>
                    <div>Product size</div>
                    <div>Full, Queen(Double/Queen)</div>
                    <a></a>
                </div>
                <Modal show={this.state.clicked} Content={[{section: SizeDetails, props: this.props.product}]} />
            </div>
        )
    }
};

export default Sizes;
