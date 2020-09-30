import React from 'react';

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
            <div>
                {this.state.imageUrls.map((imageLink, index) => {
                    return (<img src={imageLink} key={index} />);
                })}
            </div>
        );
    }
};


export default ImageGrid;