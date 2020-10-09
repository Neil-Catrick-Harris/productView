import React from 'react';
import Styled from 'styled-components';
import styles from '../styled.js';
const ExitPane = styles.modalStyles.ExitPane;
const ButtonContainer = styles.modalStyles.iconContainer;
const CarouselModal = styles.modalStyles.CarouselModal;
const Icon = styles.productDetailListing.icon;
const CarouselWrapper = styles.modalStyles.CrouselWrapper;
const CarouselImageWrapper = styles.modalStyles.CarouselImageWrapper;
const CarouselButton = styles.modalStyles.CarouselButton;
const CarouselContent = styles.modalStyles.CarouselContent;
const Body = Styled(CarouselContent)`
     display: flex;
     margin-right: 0;
     margin-left: 0;
     align-items: center;
`;
const Slides = Styled(Body)`
    margin-right: 0;
    margin-left: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;
const ButtonIconContainer = Styled(ButtonContainer)`
    text-decoration: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 0;
    font-weight: 700;
    font-size: .875rem;
    padding: 0;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    height: 3.5rem;
    border: 1px solid #dfdfdf;
`;
const ExitButton = Styled(Icon)`
    &:hover {
        background: grey;
    }
    align-item: right;
    position: relative;
        horizontal-align: right;
`;
const MediaView = Styled(CarouselWrapper)`
    position: relative;
`;
const CarouselImage = Styled.img`
    padding-left: 6.25rem;
    padding-right: 6.25rem;
    position: relative;
    margin-right: 0;
    margin-left: 0;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    width: 100%;
    display: block;
    text-align: center;
`;


class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {images: null, numOfImages: null, currentImage: null};
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
                <ExitPane>
                    <ButtonContainer>
                        <ExitButton onClick={() => this.props.handleClose()}viewBox='0 0 24 24' focusable="false" ariaHidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.0002 13.4144L16.9499 18.3642L18.3642 16.9499L13.4144 12.0002L18.3642 7.05044L16.95 5.63623L12.0002 10.586L7.05044 5.63623L5.63623 7.05044L10.586 12.0002L5.63624 16.9499L7.05046 18.3642L12.0002 13.4144Z"/>
                        </ExitButton>
                    </ButtonContainer>
                </ExitPane>
                <CarouselWrapper>
                    <MediaView>
                        <CarouselButton>
                            <ButtonIconContainer>
                                <Icon viewBox='0 0 24 24' focusable="false" ariaHidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7 12.0006L15.0012 3.99992L16.4154 5.41417L9.82838 12.0008L16.4143 18.5876L15 20.0017L7 12.0006Z" />
                                </Icon>åßß
                            </ButtonIconContainer>
                        </CarouselButton>
                        <CarouselContent>
                            <Body>
                                <Slides>
                                {this.state.images.map((url, index) => {
                                     if (index > 5) return;
                                    return <CarouselImage onClick={() => this.handleImageClick()} index={index + 1} src={url} key={url + index}/>
                                 })}
                                </Slides>
                            </Body>
                        </CarouselContent>
                        <CarouselButton>
                            <ButtonIconContainer>
                                <Icon viewBox='0 0 24 24' focusable="false" ariaHidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7 12.0006L15.0012 3.99992L16.4154 5.41417L9.82838 12.0008L16.4143 18.5876L15 20.0017L7 12.0006Z" />
                                </Icon>
                            </ButtonIconContainer>
                        </CarouselButton>
                    </MediaView>
                </CarouselWrapper>
            </CarouselModal>
        );
    }
}

export default ImageCarousel;
