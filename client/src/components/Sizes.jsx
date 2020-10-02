import React from 'react';
import Styled from 'styled-components';
import SizeDetails from './SizeDetails.jsx';
import  Modal from './Modal.jsx';

const  ProductInformation = Styled.div`
    border-top: 1px solid #f5f5f5;
`;

const Arrow = Styled.svg`
    clip-rule: evenodd;
`;
const ProductInfoBtn = Styled.button`
    background: none;
    overflow: hidden;
    border: 0;
    cursor: pointer;
    padding: 1.25rem 0;
    width: 100%;
    align-items: center;
    color: #484848;
    min-height: 5.625rem;
`;
const Productheadings = Styled.span`
    text-align: left;
    font-size: .875rem;
`;
const ProductTitle = Styled(Productheadings)`
    color: #111;
    line-height: 1.57143;
    font-weight: 700;
    display: block;
`;

const ProductSubTitle = Styled(Productheadings)`
    color: #484848;
    line-height: 1.5;
    margin-bottom: 0;
`;
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
            <ProductInformation>
                <ProductInfoBtn onClick={() => this.handleClick()}>
                    <Productheadings>
                        <ProductTitle>Product size</ProductTitle>
                        <ProductSubTitle>{this.props.sizes.fitting}</ProductSubTitle>
                    </Productheadings>
                    <Arrow fill-rule="evenodd" clip-Rule="evenodd" viewBox="0 0 24 24" 
                    path="M15.5996 11.9999L9.81456 17.7857L8.40026 16.3716L12.7714 11.9999L8.40026 7.62823L9.81457 6.21411L15.5996 11.9999Z" />
                </ProductInfoBtn>
                <Modal show={this.state.clicked} Content={[{section: SizeDetails, props: this.props.product}]} />
            </ProductInformation>
        )
    }
};

export default Sizes;
