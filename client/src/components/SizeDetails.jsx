import React from 'react';
import Styled from 'styled-components';

const ProductDetailsContainer = Styled.div`
    margin: 0;
    padding: 0;
`;
const SectionTitle = Styled.h2`
    font-size: 1.375rem;
    line-height: 1.45455;
    font-weight: 700;
    margin-bottom: 1.875rem;
`;

const SectionDetails = Styled.dl`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-bottom: .5rem;
`;

const ListItemContainer = Styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const DescriptionTag = Styled.dt`
    font-weight: 700;
`;

const ImageContainer = Styled.div`
    display: flex;
    margin: auto;
    
`;
const SizeDetails = (props) => {
    let ProductDetails = [];
    for (let attr in props.details.attributes) {
        let measurment= props.details.attributes[attr];
        ProductDetails.push((
            <ListItemContainer>
                <DescriptionTag>{attr}:&nbsp;</DescriptionTag>
                <dd>{measurment}</dd>
            </ListItemContainer>
        ));
    }
    debugger;
    return (
        <ProductDetailsContainer>
            <SectionTitle>Product size</SectionTitle>
    <SectionDetails>{ProductDetails}</SectionDetails>
        </ProductDetailsContainer>
    )
};


export default SizeDetails;