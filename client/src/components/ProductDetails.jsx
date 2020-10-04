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
const Icon = styles.productDetailListing.icon;

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
            <SectionContainer>
                <SectionButton onClick={() => this.handleClick()}>
                    <SectionHeading>
                        <SectionTitle>Product Details</SectionTitle>
                    </SectionHeading>
                    <Icon viewBox='0 0 24 24' focusable="false" ariaHidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 15.5997L6.21432 9.81468L7.62844 8.40038L12.0001 12.7715L16.3718 8.40038L17.7859 9.81469L12.0001 15.5997Z">
                        </path>
                    </Icon>
                </SectionButton>
                    { this.state.clicked && <Modal handleClose={this.handleClick.bind(this)}
                    Content={[
                        {section: <div>{this.state.header}</div>},
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
