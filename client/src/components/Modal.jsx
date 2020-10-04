import Styled from 'styled-components';
import React from 'react';
import styles from '../styled.js';

const ExitButton = styles.modalStyles.exitBtn;
const ButtonContainer = styles.modalStyles.iconContainer;
const Icon = styles.productDetailListing.icon;
const IconWithEffect = Styled(Icon)`
    &:hover {
        background: grey;
    }
    align-item: right;
    position: relative;
    horizontal-align: right;
`;
const View = Styled.div`
    display: flex;
    position: fixed;
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
padding: 1.5625rem 2.3125rem;
`;

const ModalContent = Styled.div`
    padding: 1.87rem 1.87rem 3.125rem;
    overflow: auto;
    height: 100%;
`;
const Modal = ({Content, handleClose}) => {
    const denyBodyClickPropogation = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
    return <View onClick={(e) => denyBodyClickPropogation(e)}>
        <ExitPane>
            <ExitButton>
                <ButtonContainer>
                    <IconWithEffect onClick={() => handleClose()}viewBox='0 0 24 24' focusable="false" ariaHidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0002 13.4144L16.9499 18.3642L18.3642 16.9499L13.4144 12.0002L18.3642 7.05044L16.95 5.63623L12.0002 10.586L7.05044 5.63623L5.63623 7.05044L10.586 12.0002L5.63624 16.9499L7.05046 18.3642L12.0002 13.4144Z"/>
                    </IconWithEffect>
                </ButtonContainer>
            </ExitButton>
        </ExitPane>
        <ModalContent>
            {Content.map(Item => {
                if (Item.section instanceof Function) {
                    if  (Item.props) return  <Item.section details={Item.props}/>;
                    return <Item.section/>
            } 
            return <div>{Item.section}</div>
        })}
        </ModalContent>
        </View>
};


export default Modal;
