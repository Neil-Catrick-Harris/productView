import React from 'react';
import MaterialsCare from './MaterialsCare.jsx';
import Sustainibility from './Sustainability.jsx';
import Packaging from './Packaging.jsx';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
    }

    render() {
        return (
            <div className='productDetails'>
                <div id='productDetails  mainDisplay'>Product Details</div>
                <div id='productDetails mainDisplay arrow'></div>
                <div className='popuppanel' id='popupdetails'>
                    <div id='productDetails popup description'>Generic description</div>
                </div>
            </div>
        )
    }
}

export default ProductDetails;
