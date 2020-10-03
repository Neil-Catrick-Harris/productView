import React from 'react';
import Styled from 'styled-components';
import styles from '../styled.js';

const SectionContainer = styles.productDetailListing.container;
const SectionButton = styles.productDetailListing.button;
const SectionHeading = styles.productDetailListing.heading;
const SectionTitle = styles.productDetailListing.title;
const SectionContent = styles.productDetailListing.content;
const Icon = styles.productDetailListing.icon;
const SectionEntries = styles.productDetailListing.entries;
const SectionItems = styles.productDetailListing.items;
const SectionEntry = styles.productDetailListing.entry;

class MaterialsCare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productInformation: ['testtest', 'testtest', 'testtest', 'testtest', 'testtest'],
            clicked: false
        };
        this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({clicked: !this.state.clicked});
    }
    
    render() {
        return (
            <SectionContainer>
                <SectionButton onClick={() => this.handleClick()}>
                    <SectionHeading>
                        <SectionTitle>Matrials &amp; care</SectionTitle>
                    </SectionHeading>
                    <Icon viewBox='0 0 24 24' focusable="false" ariaHidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 15.5997L6.21432 9.81468L7.62844 8.40038L12.0001 12.7715L16.3718 8.40038L17.7859 9.81469L12.0001 15.5997Z">
                        </path>
                    </Icon>
                </SectionButton>
                <SectionContent show={this.state.clicked}>
                    <SectionEntries >
                        <SectionItems id='materialscare info'>
                            {this.props.details.split(' ').map((snippet, index) => {
                                return (<SectionEntry key={snippet + index}>{snippet}</SectionEntry>);
                            })}
                        </SectionItems>
                    </SectionEntries>
                </SectionContent>
            </SectionContainer>

        )
    }
}

export default MaterialsCare;
