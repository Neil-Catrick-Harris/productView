import React from 'react';

class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: null,  
            displayed: null
        }
    }

    static getDerivedStateFromProps(props, state) {
        debugger;
        return {
            images: props.images,
            displayed: props.clickedImage
        }
    }
    render() {
        return (
            <div className="imageCarousel">
                {this.state.images.map((imageUrl, index) => {
                    return (
                        <div>
                            <a className="previousImage"/>
                            <img src={imageUrl} key={imageUrl + index}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ImageCarousel;
