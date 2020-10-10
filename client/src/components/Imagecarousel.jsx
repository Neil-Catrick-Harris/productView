import React from 'react';
import Styled from 'styled-components';
import styles from '../styled.js';
const ExitPane = styles.modalStyles.ExitPane;
const ButtonContainer = styles.modalStyles.iconContainer;
const Icon = styles.productDetailListing.icon;
const CarouselWrapper = styles.modalStyles.Content;
const NavButton = styles.modalStyles.button;
const RelativeContentContainer = Styled(CarouselWrapper)`
    position: relative;
`;
const ImageViewContaier = styles.modalStyles.imageViewContainer;
const CarouselModal = Styled(styles.modalStyles.View)`
    width: 100%;
    max-width: none;
    animation: slideUp .3s ease forwards;
`;
const ExitButton = Styled(Icon)`
    &:hover {
        background: grey;
    }
    align-item: right;
    position: relative;
        horizontal-align: right;
`;
const ImagesWrapper = Styled(CarouselWrapper)`
    overflow-x: scroll;
    overflow-y: hidden;
    position: relative;
    padding: .3rem;
    scroll-snap-type: x mandatory;
    top: 0;
`;
const ImageFormat = styles.modalStyles.ImageFormat;
const Images = styles.modalStyles.slidesBody;
const SlideImageContainer = styles.modalStyles.slideContainer;
class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {images: null, zoomed: false};
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
    changeZoom() { 
        this.setState({zoomed: !this.state.zoomed});
    }
    render() {
        return (
            this.state.images && <CarouselModal>
                <ExitPane>
                    <ButtonContainer>
                        <ExitButton onClick={() => this.props.handleClose()}viewBox='0 0 24 24' focusable="false" ariaHidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.0002 13.4144L16.9499 18.3642L18.3642 16.9499L13.4144 12.0002L18.3642 7.05044L16.95 5.63623L12.0002 10.586L7.05044 5.63623L5.63623 7.05044L10.586 12.0002L5.63624 16.9499L7.05046 18.3642L12.0002 13.4144Z"/>
                        </ExitButton>
                    </ButtonContainer>
                </ExitPane>
                <CarouselWrapper>
                    <RelativeContentContainer>
                        <ImageViewContaier>
                            <ImagesWrapper>
                                <div>
                                    <Images>
                                        {this.state.images.map((imageUrl, i) => {
                                            return  (
                                                <SlideImageContainer>
                                                    <ImageFormat onClick={() => this.changeZoom()} zoomed={this.state.zoomed}>
                                                        <img src={imageUrl} key={imageUrl + i} />
                                                    </ImageFormat>
                                                </SlideImageContainer>
                                            )
                                        })}
                                    </Images>
                                </div>
                            </ImagesWrapper>
                        </ImageViewContaier>
                    </RelativeContentContainer>
                </CarouselWrapper>
            </CarouselModal>
        );
    }
}

export default ImageCarousel;
