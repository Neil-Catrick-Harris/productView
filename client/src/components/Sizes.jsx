import React from 'react';
import Styled from 'styled-components';
import SizeDetails from './SizeDetails.jsx';
import  Modal from './Modal.jsx';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline'

const  ProductInformation = Styled.div`
    border-top: 1px solid #f5f5f5;
`;

const ProductInfoBtn = Styled.button`
    display: flex;
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
                    <ArrowIosForwardOutline size='15'/>    
                </ProductInfoBtn>
                {this.state.clicked && 
                    <Modal Content={[{section: SizeDetails, props: {attributes: this.props.sizes.attributes, image: this.props.image}}]} />
                }
            </ProductInformation>
        )
    }
};

export default Sizes;
