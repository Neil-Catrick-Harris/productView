import React from 'react';
import styled from 'styled-components';
import {ArrowIosBackOutline} from '@styled-icons/evaicons-outline';
import {ArrowIosForwardOutline} from '@styled-icons/evaicons-outline';

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
                <BackArrow onClick={() => this.viewPrevious()}>
                    <ArrowIosBackOutline size='48'/>
                </BackArrow>
                <CarouselImageWrapper>
                    {<CarouselImage src={this.state.images[this.state.currentImage]} key={'asjenfvjandjnvdjwanvj'} />}
                </CarouselImageWrapper>
                <ForwardArrow onClick={() => this.viewNext()}>
                    <ArrowIosForwardOutline size='48'/>
                </ForwardArrow>
            </CarouselModal>
        );
    }
}

export default ImageCarousel;
