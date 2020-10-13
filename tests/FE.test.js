import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Imagecarousel from '../client/src/components/Imagecarousel';
import ImageGrid from '../client/src/components/ImageGrid';
import MaterialsAndCare from '../client/src/components/MaterialsCare';
// import Modal from '../client/src/components/Modal';
// import Packaging from '../client/src/components/Packaging';
// import ProductDetails from '../client/src/components/ProductDetails';
// import ProductDescription from '../client/src/components/ProductDescription';
// import SizeDetails from '../client/src/components/SizeDetails';
// import Sizes from '../client/src/components/Sizes';
// import Sustainability from '../client/src/components/sustainability';
const imagecarousel = 'Test Imagecarousel';
const imageGrid = 'Test ImageGrid';
configure({ adapter: new Adapter() });

/*--------------------------------------------------\
|       Image carousel functinality                 |
|       tests:  render, state, props                |
\--------------------------------------------------*/
let imageArray = ["http://placeimg.com/640/480/sports","http://placeimg.com/640/480/nature","http://placeimg.com/640/480/fashion","http://placeimg.com/640/480/business","http://placeimg.com/640/480","http://placeimg.com/640/480/abstract"];
describe('Image carousel', () => {
    it('carousel should render', () => {   
        shallow(<Imagecarousel images={imageArray}>{imagecarousel}</Imagecarousel>);
    });
    it('carousel should set images to state from props', () => {   
        let wrapper =  shallow(<Imagecarousel images={imageArray}>{imagecarousel}</Imagecarousel>);
        let instance = wrapper.instance();
        expect(instance.state.images.length).toBe(6);
    });
    // TODO: click to change images, click on exit button
});

describe('Image grid', () => {
    it('Grid should render', () => {   
        shallow(<ImageGrid images={imageArray}>{imageGrid}</ImageGrid>);
    });
    it('Grid should display store inital images as state', () => {   
        let GridWrapper =  shallow(<ImageGrid images={imageArray}>{imageGrid}</ImageGrid>);
        let GridIInstance = GridWrapper.instance();
        expect(GridIInstance.state.imageUrls.length).toBe(6);
    });
    // TODO: click on image and render modal, Don't need to test handle close. Maybe remove method from Image grid Unused currently
});

describe('MaterialsAndCare', () => {
   // TODO: Matrails contains list of material nformation
});

xdescribe('Modal', () => {
    // TODO: renders on request, close on button click, renders all child modules passed in as props
});

xdescribe('Packagiing', () => {
    // TODO: Packagind renders, displays list of packagind details
});

xdescribe('ProductDetails', () => {
    // TODO: Product Details renders, on Click opens Modal, Modal contains Packaging, Materials, Sustainanbility, and short desc
});

xdescribe('SizeDetails', () => {
   // TODO: SizeDetails renders list of productDetails
});

xdescribe('SizesButton', () => {
    // TODO: click should open module
});

xdescribe('Sustainability', () => {
   // TODO: Should use product details to render text
});

xdescribe('Product Description', () => {
    // TO DO; Should render modal on click, should pass materials, sustainability, and packaging modules
});

xdescribe('Full APP', () => {
    // TO DO: request product details, render image grid, product Details, and product sizes buttons, should set server response as State
    // should get different product for different endpoint
});