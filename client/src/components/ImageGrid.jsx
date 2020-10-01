import React from 'react';
import styles from '../styled.js';

const GridWrapper = styles.imageGridWrapper;
const Image = styles.image;

class ImageGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrls: []
        }
    }
    componentDidMount() {
        this.setState({
            imageUrls: this.props.images
        });
    }
    render() {
        return (
            <GridWrapper>
                {this.state.imageUrls.map((url, index) => {
                    if (index > 5) return;
                    return <Image index={index + 1} src={url} key={url + index}/>
                })}
            </GridWrapper>
        );
    }
};


export default ImageGrid;
