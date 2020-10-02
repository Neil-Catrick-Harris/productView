import Styled from 'styled-components';
import React from 'react';

const View = Styled.div`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 9001;
    overflow: hidden;
    flex-shrink: 0;
    text-align: left;
    flex-direction: column;
    width: 21.25rem;
`;

const ExitPane = Styled.div`
    padding: .625rem 1.0625rem;

`;

const ModalContent = Styled.div`
    padding: 1.87rem 1.87rem 3.125rem;
    overflow: auto;
    height: 100%;
`;
const Modal = ({Content}) => {
return <View>
    <ExitPane>Exit the module here</ExitPane>
    {Content.map(Item => {
    if (Item.section instanceof Function) {
        if  (Item.props) {
            return  <Item.section details={Item.props} />
        }
        return <Item.section />
    }
    return <div>{Item.section}</div>
})}</View>
};


export default Modal;
