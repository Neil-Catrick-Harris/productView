import React from 'react';
import Styled from 'styled-components';
import SizeDetails from './SizeDetails.jsx';
import  Modal from './Modal.jsx';
import styles from '../styled.js';
const SectionContainer = styles.productDetailListing.container;
const SectionButton = styles.productDetailListing.button;
const SectionHeading = styles.productDetailListing.heading;
const SectionTitle = styles.productDetailListing.title;
const SectionContent = styles.productDetailListing.content;
const ArrowIcon = styles.productDetailListing.icon;
const ProductSubTitle = Styled(SectionHeading)`
    color: #484848;
    line-height: 1.5;
    margin-bottom: 0;
`;

class Sizes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false};
    }

    handleClick() {
        this.setState({clicked: !this.state.clicked});
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
            <SectionContainer gridArea='productSizes'>
                <SectionButton onClick={() => this.handleClick()}>
                    <SectionHeading>
                        <SectionTitle>Product size</SectionTitle>
                        <ProductSubTitle>{this.props.sizes.fitting}</ProductSubTitle>
                    </SectionHeading>
                    <ArrowIcon viewBox='0 0 24 24' focusable="false" ariaHidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M 15.5996 11.9999 L 9.81456 17.7857 L 8.40026 16.3716 L 12.7714 11.9999 L 8.40026 7.62823 L 9.81457 6.21411 L 15.5996 11.9999 Z">
                        </path>
                    </ArrowIcon> 
                </SectionButton>
                <SectionContent>
                    {this.state.clicked && 
                        <Modal handleClose={this.handleClick.bind(this)} Content={[{section: SizeDetails, props: {attributes: this.props.sizes.attributes, image: this.props.image}}]} />
                    }
                </SectionContent>
            </SectionContainer>
        )
    }
};

export default Sizes;
