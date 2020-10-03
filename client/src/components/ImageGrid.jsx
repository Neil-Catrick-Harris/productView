import React from 'react';
import styles from '../styled.js';
import ImageCarousel from './Imagecarousel.jsx';

const GridWrapper = styles.imageGridWrapper;
const Image = styles.image;

class ImageGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrls: []
        }
        this.handleImageClick.bind(this);
    }
    componentDidMount() {
        this.setState({
            imageUrls: this.props.images
        });
    }

    handleImageClick() {
        this.setState({clicked: !this.state.clicked});
    }
    render() {
        return (
            <GridWrapper>
                {this.state.imageUrls.map((url, index) => {
                    if (index > 5) return;
                    return <Image
                        onClick={() => this.handleImageClick()}
                        index={index + 1}
                        src={url}
                        key={url + index}
                    />
                })}
                {this.state.clicked && <ImageCarousel images={this.state.imageUrls} />}
            </GridWrapper>
        );
    }
};


export default ImageGrid;
