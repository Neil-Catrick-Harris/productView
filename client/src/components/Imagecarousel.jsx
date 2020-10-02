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
        'backArrow image forwardArrow'`;

const CarouselImageWrapper = styled.div`
    grid-area: image;
    height: 100%;`;

const CarouselImage = styled.img`
    display: block;
    padding: 2px;
    align: center;
    margin: 50% 0 50% 0;
    border: solid silver 1px;`;

const BackArrow = styled.div`
    grid-area: backArrow;
    position; absolute;
    margin: auto;`;

const ForwardArrow = styled.div`
    grid-area: forwardArrow;
    position; absolute;
    margin: auto;`;

class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: null,  
            displayed: null
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            images: props.images
        }
    }
    render() {
        return (
            <CarouselModal>
                <BackArrow>
                    <ArrowIosBackOutline size='48'/>
                </BackArrow>
                <CarouselImageWrapper>
                    {<CarouselImage src={this.state.images[2]} key={'asjenfvjandjnvdjwanvj'} />}
                </CarouselImageWrapper>
                <ForwardArrow>
                    <ArrowIosForwardOutline size='48'/>
                </ForwardArrow>
            </CarouselModal>
        );
    }
}

export default ImageCarousel;
