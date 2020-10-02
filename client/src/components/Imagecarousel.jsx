import React from 'react';
import styled from 'styled-components';

const CarouselModal = styled.div`
    position: absolute;
    background: black;
    min-width: 100%;
    min-height: 100%;
    background: white;`;

const CarouselImageWrapper = styled.div`
   margin: 25% 25% 25% 25% `;


const CarouselImage = styled.img`
    display: block;
    padding: 2px;
    border: solid silver 1px;`;

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
                <CarouselImageWrapper>
                {<CarouselImage src={this.state.images[2]} key={'asjenfvjandjnvdjwanvj'} />}
                </CarouselImageWrapper>
            </CarouselModal>
        );
    }
}

export default ImageCarousel;
