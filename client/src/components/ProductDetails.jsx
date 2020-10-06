import React from 'react';
import MaterialsCare from './MaterialsCare.jsx';
import Sustainibility from './Sustainability.jsx';
import Packaging from './Packaging.jsx';
import Modal from './Modal.jsx';
import styles from '../styled.js';

const SectionContainer = styles.productDetailListing.container;
const SectionButton = styles.productDetailListing.button;
const SectionHeading = styles.productDetailListing.heading;
const SectionTitle = styles.productDetailListing.title;
const SectionContent = styles.productDetailListing.content;
const ArrowIcon = styles.productDetailListing.icon;

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
        this.props.showModal();
    }
    shouldComponentUpdate() {
        if (this.props.bodyClicked) {
            this.setState({clicked: false})
        }
        return true;
    }
    render() {
        return (
            <SectionContainer gridArea="productDetails">
                <SectionButton onClick={() => this.handleClick()}>
                    <SectionHeading>
                        <SectionTitle>Product Details</SectionTitle>
                    </SectionHeading>
                    <ArrowIcon viewBox='0 0 24 24' focusable="false" ariaHidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M 15.5996 11.9999 L 9.81456 17.7857 L 8.40026 16.3716 L 12.7714 11.9999 L 8.40026 7.62823 L 9.81457 6.21411 L 15.5996 11.9999 Z">
                        </path>
                    </ArrowIcon>
                </SectionButton>
                    { this.state.clicked && <Modal handleClose={this.handleClick.bind(this)}
                    Content={[
                        {section: <SectionTitle>{this.state.header}</SectionTitle>},
                        {section: <div>{this.props.product.description}<br /><br /></div>},
                        {section: MaterialsCare, props: this.props.product.materials},
                        {section: Sustainibility, props: this.props.product.sustainibility},
                        {section: Packaging, props: this.props.product.packaging}
                    ]}
                    />}
            </SectionContainer>
        )
    }
}

export default ProductDetails;
