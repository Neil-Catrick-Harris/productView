import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Imagecarousel from '../client/src/components/Imagecarousel';
const imagecarousel = 'Test Imagecarousel';
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
});