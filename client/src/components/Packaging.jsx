import React from 'react';
import Modal from './Modal.jsx';
import styles from  '../styled.js';

const SectionContainer = styles.productDetailListing.container;
const SectionButton = styles.productDetailListing.button;
const SectionHeading = styles.productDetailListing.heading;
const SectionTitle = styles.productDetailListing.title;
const SectionContent = styles.productDetailListing.content;
const Icon = styles.productDetailListing.icon;
const SpecContainer = styles.productDetailListing.items;
const SpecEntry = styles.productDetailListing.entry;

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
        this.setState({clicked: !this.state.clicked});
    }

    render() {
        let packagingEntries = [];

        for (let spec in this.props.details.measurments) {
            let specValue = this.props.details.measurments[spec];
            packagingEntries.push(<SpecEntry>{spec}: {specValue}</SpecEntry>);
        }

        return (
            <SectionContainer>
                <SectionButton onClick={() => this.handleClick()}>
                    <SectionHeading>
                        <SectionTitle>Packaging</SectionTitle>
                    </SectionHeading>
                    <Icon viewBox='0 0 24 24' focusable="false" ariaHidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 15.5997L6.21432 9.81468L7.62844 8.40038L12.0001 12.7715L16.3718 8.40038L17.7859 9.81469L12.0001 15.5997Z" />
                    </Icon>
                </SectionButton>
                {this.state.clicked && <SectionContent show={this.state.clicked}>
                    <SpecContainer>{packagingEntries}</SpecContainer>
                </SectionContent>}
            </SectionContainer>

        )
    }
}

export default Packaging;
