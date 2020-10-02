import React from 'react';
import MaterialsCare from './MaterialsCare.jsx';
import Sustainibility from './Sustainability.jsx';
import Packaging from './Packaging.jsx';
import Modal from './Modal.jsx';
import styles from '../styled.js';

const ProductDetailsWrapper = styles.productDetailsWrapper;
const StyledButton = styles.moduleClickButton;

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
            <ProductDetailsWrapper>
                <StyledButton>
                <span  onClick={() => this.handleClick()}  id='productDetails  mainDisplay'>Product Details</span>
                <a id='arrow'/>
                { this.state.clicked && <Modal
                Content={[
                    { section: <div>{this.state.header}</div>},
                    { section: <div>{this.props.product.description}<br /><br /></div>}
                ]}
                />}
                </StyledButton>
            </ProductDetailsWrapper>
        )
    }
}

export default ProductDetails;
