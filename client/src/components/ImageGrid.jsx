import React from 'react';
import styles from '../styled.js';
import ImageCarousel from './Imagecarousel.jsx';

const GridWrapper = styles.imageGridWrapper;
const Image = styles.image;
const Container = styles.imageGridContainer;
const ImageContainer = styles.imageContainer;
class ImageGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = { imageUrls: [] };
        this.handleImageClick.bind(this);
    }

    componentDidMount() {
        this.setState({imageUrls: this.props.images});
    }

    handleClose() {
        this.setState({clicked: !this.state.clicked});
    }
    handleImageClick() {
        this.setState({clicked: !this.state.clicked});
    }
    render() {
        return (
            <Container gridArea="imageGrid">
                <GridWrapper >
                        {this.state.imageUrls.map((url, index) => {
                            if (index > 5) return;
                            return (
                            <ImageContainer>
                                <Image onClick={() => this.handleImageClick()} index={index + 1} src={url} key={url + index}/>
                            </ImageContainer>
                            )
                        })}
                    {this.state.clicked && <ImageCarousel handleClose={this.handleClose.bind(this)} images={this.state.imageUrls} />}
                </GridWrapper>
            </Container>
        );
    }
};


export default ImageGrid;
