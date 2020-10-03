import React from 'react';
import styles from '../styled.js';

const SectionContainer = styles.productDetailListing.container;
const SectionHeadings = styles.productDetailListing.heading;
const SectionBtn = styles.productDetailListing.button;
const Title = styles.productDetailListing.title;
const Icon = styles.productDetailListing.icon;
const Conetent = styles.productDetailListing.content;
const SectionEntries = styles.productDetailListing.entries;
const Items = styles.productDetailListing.items;
const Entry = styles.productDetailListing.entry;

class Sustainability extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productInformation: null,
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
                <SectionBtn onClick={() => this.handleClick()}>
                    <SectionHeadings>
                        <Title >Sustainability &amp; environment</Title>
                    </SectionHeadings>
                    <Icon>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 15.5997L6.21432 9.81468L7.62844 8.40038L12.0001 12.7715L16.3718 8.40038L17.7859 9.81469L12.0001 15.5997Z">
                        </path>
                    </Icon>
                </SectionBtn>
                <Conetent show={this.state.clicked}>
                    <SectionEntries>
                        <Items>
                            <Entry key='clksmcs'>{this.props.details}</Entry>
                        </Items>
                    </SectionEntries>
                </Conetent>
            </SectionContainer>

        )
    }
}

export default Sustainability;
