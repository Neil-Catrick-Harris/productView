import styled from 'styled-components';

const styles = {
    imageGridWrapper: styled.div`
        display: grid;
        height: 100%;
        width: 75%;
        grid-template-areas:
            "image1 image2"
            "image3 image4"
            "image5 image6";`
        ,
    image: styled.img`
            grid-area: image${(props) => props.index};
            padding: 2px;
            border: solid silver 1px;
            height: 90%;
            width: 95%;`
};

export default styles;
