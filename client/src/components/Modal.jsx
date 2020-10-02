import styled from 'styled-components';
import React from 'react';

const View = styled.div`
    position: fixed;
    border: solid 1px silver;
    z-index: 1;
    right: 0;
    top: 0;
    height: 100%;
    width: 35%;
    overflow: auto;
    background-color: white;
    `;

const Hide = styled(View)`
    display: none`;

const Show = styled(View)`
    display:  block;`;

const Modal = ({Content, show}) => {
    debugger;
return !show ? <Hide /> : <Show>{Content.map(Item => {
    if  (item.prop) {
        return  <Item details={item.prop} />
    }
    return <Item />
})}</Show>
};


export default Modal;
