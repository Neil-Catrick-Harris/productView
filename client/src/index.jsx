import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import ImageGrid from './components/ImageGrid.jsx';
const axios = require('axios');
import GlobalStyle from './createGlobalStyle';
import ProductDetails from './components/ProductDetails.jsx';
import Sizes from './components/Sizes.jsx';

class Service extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productDetails: null,
            showCarousel: false,
            showModal: false,
            clickedImage: ['http:////placeimg.com/640/480/people']
        }
    }

    componentDidMount() {
        axios.get('product/75')
           .then((res) => this.setState({productDetails: res.data[0]}))
           .catch((err) => console.error(err));
    }

    handleModalClick() {
        this.setState({showModal: !this.state.showModal})
    }
    
    render() {
        return (
            <div className='moduleDisplay'>
                <GlobalStyle modalShowing={this.state.showModal}/>
                {this.state.productDetails ?
                <Fragment>
                    <ImageGrid className="imageGrid" images ={this.state.productDetails.imageUrls}/>
                    <ProductDetails showModal={this.handleModalClick.bind(this)} product={this.state.productDetails}/>
                    <Sizes showModal={this.handleModalClick.bind(this)} sizes={this.state.productDetails.sizes}/>
                </Fragment> 
                : <div>Loading images...</div>}
            </div>
        )
    }
}

ReactDom.render(<Service />, document.getElementById('app'))
