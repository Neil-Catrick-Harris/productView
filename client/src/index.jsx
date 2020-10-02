import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import ImageGrid from './components/ImageGrid.jsx';
const axios = require('axios');
import ImageCarousel from './components/Imagecarousel.jsx';
import GlobalStyle from './createGlobalStyle';
import ProductDetails from './components/ProductDetails.jsx';

class Service extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productDetails: null,
            showCarousel: false,
            clickedImage: ['http:////placeimg.com/640/480/people']
        }
    }
    componentDidMount() {
        axios.get('product/75')
           .then((res) => {
               this.setState({
                   productDetails: res.data[0]
               })
           })
           .catch((err) => {
               console.error(err);
           })
    }
    render() {
        return (
            <div className='moduleDisplay'>
                <GlobalStyle />
                {this.state.productDetails ?
                <Fragment>
                    <ImageGrid className="imageGrid" images ={this.state.productDetails.imageUrls}/>
                </Fragment> 
                : 
                <div>Loading images...</div>}
            </div>
        )
    }
}

ReactDom.render(<Service />, document.getElementById('app'))
