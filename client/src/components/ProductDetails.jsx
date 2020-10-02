import React from 'react';
import MaterialsCare from './MaterialsCare.jsx';
import Sustainibility from './Sustainability.jsx';
import Packaging from './Packaging.jsx';
import Modal from './Modal.jsx';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            header: 'Product details',
        };
    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked});
    }
    render() {
        return (
            <div className='productDetails'>
                <div  onClick={() => this.handleClick()}  id='productDetails  mainDisplay'>Product Details</div>
                <a id='arrow'/>
                <Modal 
                show={this.state.clicked}
                Content={[
                    { section: <div>{this.state.header}</div>},
                    { section: <div>{this.props.product.description}<br /><br /></div>}
                ]}
                />
            </div>
        )
    }
}

export default ProductDetails;
