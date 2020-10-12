import React from 'react';
import Styled from 'styled-components';
import styles from '../styled.js';
const ExitPane = styles.modalStyles.ExitPane;
const ButtonContainer = styles.modalStyles.iconContainer;
const Icon = styles.productDetailListing.icon;
const CarouselWrapper = styles.modalStyles.Content;
const NavButton = Styled(styles.modalStyles.button)`
    color: #111;
    top: 25%;
    ${(props) => props.left ? "left: 0" : "right: 0"};
`;
const RelativeContentContainer = Styled(CarouselWrapper)`
    position: relative;
`;
const ImageViewContaier = styles.modalStyles.imageViewContainer;
const CarouselModal = Styled(styles.modalStyles.View)`
    width: 100%;
    max-width: none;
    animation: slideUp .5s ease forwards;
    @keyframes slideUp {
       0% { transform: translateY(100%); }
       100% { transform: translateY(0); }
    }
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
    scroll-snap-type: x mandatory;
    top: 0;
    padding-left: 0;
    
`;
const SlideWrapper = styles.modalStyles.slideWrapper;
const Slide = styles.modalStyles.slide;
const SlidesContainer = styles.modalStyles.slideContainer;
const ScrollButtonView = styles.modalStyles.scrollButton;
const ScrollButtonContainer = styles.modalStyles.ScrollButtonContainer;
const ScrollButtonHighLight = styles.modalStyles.scrollButtonHighlight;
class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {images: null, zoomed: false};
    }
    componentDidMount() {
        this.setState({
            images: this.props.images,
            numOfImages: this.props.images.length,
            currentImage: this.props.imageClicked
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
    changeImage(e, move) {
        if (this.state.currentImage >= 0 && this.state.currentImage < this.state.numOfImages) {
            if (move > 0) {
                e.currentTarget.previousElementSibling.firstElementChild.children[this.state.currentImage + move].scrollIntoView({behavior: 'smooth'})
            } else {
                e.currentTarget.nextElementSibling.firstElementChild.children[this.state.currentImage + move].scrollIntoView({behavior: 'smooth'});
            }
            let index = this.state.currentImage + move;
            this.setState({currentImage: index})
        }
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
                            <NavButton left onClick={(e) => this.changeImage(e, -1)} >
                                <Icon viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7 12.0006L15.0012 3.99992L16.4154 5.41417L9.82838 12.0008L16.4143 18.5876L15 20.0017L7 12.0006Z" />
                                </Icon>
                            </NavButton>
                            <ImagesWrapper>
                                <SlidesContainer id="carouselList">
                                    {this.state.images.map((url, i) => {
                                        return (
                                            <SlideWrapper>
                                                <Slide>
                                                    <img src={url}></img>
                                                </Slide>
                                            </SlideWrapper>
                                        )
                                    })}
                                </SlidesContainer>
                            </ImagesWrapper>
                            <NavButton right  onClick={(e) => this.changeImage(e, 1)} >
                                <Icon viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.4153 12.0003L8.41407 20.0011L6.9999 18.5868L13.5869 12.0002L7.00097 5.41339L8.41528 3.99927L16.4153 12.0003Z" />
                                </Icon>
                            </NavButton>
                        </ImageViewContaier>
                        <ScrollButtonView>
                            <ScrollButtonContainer>
                                <ScrollButtonHighLight></ScrollButtonHighLight>
                            </ScrollButtonContainer>
                        </ScrollButtonView>
                    </RelativeContentContainer>
                </CarouselWrapper>
            </CarouselModal>
        );
    }
}

export default ImageCarousel;
