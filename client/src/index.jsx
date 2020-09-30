import React from 'react';
import ReactDom from 'react-dom';
import ImageGrid from './components/ImageGrid.jsx';
const axios = require('axios');

class Service extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productDetails: null
        }
    }
    componentDidMount() {
        axios.get('products/75')
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
        <div>
            <div id='imageGrid'>
                {this.state.productDetails ?
                    <ImageGrid images ={this.state.productDetails.imageUrls}/> : 
                <div>Loading images...</div>}
            </div>
        </div>
        )
    }
}

ReactDom.render(<Service />, document.getElementById('app'))
