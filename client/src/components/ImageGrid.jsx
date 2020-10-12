import React from 'react';
import styles from '../styled.js';
import ImageCarousel from './Imagecarousel.jsx';

const GridWrapper = styles.imageGridWrapper;
const Image = styles.image;
const Container = styles.imageGridContainer;
const ImageContainer = styles.imageContainer;
const ImageWrapper = styles.imageWrapper;
class ImageGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = { imageUrls: [], clicked: false};
        this.handleImageClick.bind(this);
    }

    componentDidMount() {
        this.setState({imageUrls: this.props.images});
    }

    handleClose() {
        this.setState({clicked: !this.state.clicked});
    }
    handleImageClick(e) {
        this.setState({
            clicked: !this.state.clicked,
            imageClicked: parseInt(e.currentTarget.id)
        })
    }
    render() {
        return (
            <Container gridArea="imageGrid">
                <GridWrapper >
                        {this.state.imageUrls.map((url, index) => {
                            if (index > 5) return;
                            return (
                                <ImageWrapper onClick={(e) => this.handleImageClick(e)} id={index}>
                                    <ImageContainer>
                                        <Image src={url} key={url + index}/>
                                    </ImageContainer>
                                </ImageWrapper>
                            )
                        })}
                    {this.state.clicked && <ImageCarousel imageClicked={this.state.imageClicked} handleClose={this.handleClose.bind(this)} images={this.state.imageUrls} />}
                </GridWrapper>
            </Container>
        );
    }
};


export default ImageGrid;
