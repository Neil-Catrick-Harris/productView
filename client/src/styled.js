import Styled from 'styled-components';

const styles = {
    imageGridContainer: Styled.div`
        display: block;
        height: 100%;
        width: 100%;
        `,
    imageGridWrapper: Styled.div`
        display: grid;
        height: 100%;
        width: 100%;
        grid-template-areas:
            "image1 image2"
            "image3 image4"
            "image5 image6";
        `,
    image: Styled.img`
        grid-area: image${(props) => props.index};
        padding: 2px;
        height: 90%;
        width: 95%;
        `,
    ModuleContainer: Styled.div`
        display: block;
    `,
    productDetailListing: {
        container: Styled.div`
            grid-area: ${(props) => props.gridArea}
            border-top: 1px solid #f5f5f5;
        `,
        button: Styled.button`
            display: flex;
            background: none;
            overflow: hidden;
            border: 0;
            cursor: pointer;
            padding: 1.25rem 0;
            width: 100%;
            align-items: center;
            color: #484848;
            min-height: 5.625rem;
            &:hover {
                text-decoration: underline;
            }
        `,
        heading: Styled.span`
            text-align: left;
            font-size: .875rem;
            flex-grow: 1;
            line-height: 0;
        `,
        title: Styled.span`
            text-align: left;
            font-size: .875rem;
            flex-grow: 1;
            line-height: 0;
            color: #111;
            font-size: .875rem;
            line-height: 1.57143;
            font-weight: 700;
            display: block;
            line-height: 1.42857;
        `,
        content: Styled.div`
            padding-top: 1.5rem;
            padding-bottom: 4rem;
            height: auto;
            opacity: 1;
        `,
        icon: Styled.svg`
            display: inline-block;
            height: 1.5rem;
            width: 1.5rem;
            vertical-align: middle;
            fill: currentColor;
            transition-duration: .3s;
            transition-timing-function: ease
        `,
        entries: Styled.div`
            padding-top: 1.5rem;
            padding-bottom: 4rem;
            height: auto;
            opacity: 1;
        `,
        items: Styled.div`
            margin-bottom: 0;
            margin: 1.875rem 0;
        `,
        entry: Styled.span`
            display: block;
            margin: 0;
            `
        },
    productPackagingSpec: {
        listItemContainer: Styled.div`
            display: flex;
            flex-wrap: wrap;
        `,
        descriptionTag: Styled.dt`
            font-weight: 700;
        `,
        mediaSection: Styled.div`
            margin: 0;
            padding: 0;
        `
    },
    modalStyles: {
        CarouselModal: Styled.div`
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            background: #fff;
            z-index: 9001;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            text-align: left;
        `,
        CrouselWrapper: Styled.div`
            padding: 0;
            overflow: auto;
            height: 100%;
        `,
        CarouselImageWrapper: Styled.div`
            grid-area: image;
            height: 100%;
        `,
        CarouselImage: Styled.img`
            display: block;
            padding: 2px;
            align: center;
            margin: 50% 0 50% 0;
            border: solid silver 1px;
        `,
        CarouselContent: Styled.div`
            overflow-x: scroll;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            position: relative;
            padding-top: .3125rem;
            padding-bottom: 1.8125rem;
            scroll-snap-type: x mandatory;
        `,
        BackArrow: Styled.div`
            grid-area: backArrow;
            position: absolute;
            margin: auto;
        `, 
        ForwardArrow: Styled.div`
            grid-area: forwardArrow;
            position: absolute;
            margin: auto;
        `,
        iconContainer: Styled.span`
            height: 2.5rem;
            padding: 0 .5rem;
            font-size: .75rem;
            line-height: 1.33333;
        `,
        exitBtn: Styled.button`
            position: relative;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border: 0;
            padding: 0;
            cursor: pointer;
            box-sizing: border-box;
            background: transparent;
            border-radius: 52px;
            vertical-align: top;
        `,
        ExitPane: Styled.div`
            padding: 1.5625rem 2.3125rem;
        `,
        CarouselButton: Styled.button`
            position: absolute;
            top: 50%;
            visibility: hidden;
            opacity: 0;
            transition: opacity .2s,visibility 0ms .2s;
            cursor: pointer;
            z-index: 1;
            left: -1.25rem;
            transform: translateY(-50%);
        `
    }
};


export default styles;
