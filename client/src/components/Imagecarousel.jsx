import React from 'react';
import styled from 'styled-components';
import styles from '../styled.js';
const ArrowIcon = styles.productDetailListing.icon;
const CarouselModal = styled.div`
    display: grid;
    position: absolute;
    background: black;
    min-width: 100%;
    min-height: 100%;
    background: white;
    grid-template-areas: 
        'backArrow image forwardArrow'
        'backArrow image forwardArrow'
        'backArrow image forwardArrow'
`;

const CarouselImageWrapper = styled.div`
    grid-area: image;
    height: 100%;
`;

const CarouselImage = styled.img`
    display: block;
    padding: 2px;
    align: center;
    margin: 50% 0 50% 0;
    border: solid silver 1px;
`;

const BackArrow = styled.div`
    grid-area: backArrow;
    position: absolute;
    margin: auto;
`;

const ForwardArrow = styled.div`
    grid-area: forwardArrow;
    position: absolute;
    margin: auto;
`;

class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: null,  
            numOfImages: null,
            currentImage: null
        };
    }
    componentDidMount() {
        this.setState({
            images: this.props.images,
            numOfImages: this.props.images.length,
            currentImage: Math.floor(this.props.images.length / 2)
        })
    }
    viewPrevious() {
        if (this.state.currentImage === 0) return;
        this.setState({currentImage: this.state.currentImage - 1})
    }
    viewNext() {
        if (this.state.currentImage === this.state.numOfImages - 1) return;
        this.setState({currentImage: this.state.currentImage + 1})
    }
    render() {
        return (
            this.state.images && <CarouselModal>
                <ArrowIcon onClick={() => this.viewPrevious()} viewBox='0 0 24 24' focusable="false" ariaHidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7 12.0006L15.0012 3.99992L16.4154 5.41417L9.82838 12.0008L16.4143 18.5876L15 20.0017L7 12.0006Z" />
                </ArrowIcon>
                <CarouselImageWrapper>
                    {<CarouselImage src={this.state.images[this.state.currentImage]} key={this.state.images[this.state.currentImage]}/>}
                </CarouselImageWrapper>
                <ArrowIcon onClick={() => this.viewNext()} viewBox='0 0 24 24' focusable="false" ariaHidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.4153 12.0003L8.41407 20.0011L6.9999 18.5868L13.5869 12.0002L7.00097 5.41339L8.41528 3.99927L16.4153 12.0003Z"/>
                    </ArrowIcon>
            </CarouselModal>
        );
    }
}

export default ImageCarousel;
