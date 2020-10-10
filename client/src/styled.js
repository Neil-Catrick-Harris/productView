import Styled from 'styled-components';

const styles = {
    imageGridContainer: Styled.div`
        display: block;
        height: auto;
        width: auto;
        padding: 2px;
        `,
    imageGridWrapper: Styled.div`
            display: grid;
            grid-template-columns: repeat(2, minmax(200px, 1fr));
        `,
    image: Styled.img`
        max-height: 200px;
        max-width: 100%;
        object-fit: cover;
        `,
    imageContainer: Styled.div`
        padding: 3px;
    `,
    ModuleContainer: Styled.div`
        display: grid;
        grid-template-areas:
            "imageGrid"
            "productDetails"
            "productSizes";
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
        View: Styled.div`
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
        `,
        imageViewContainer: Styled.div`
            bottom: auto;
            width: 100%;
        `,
        CrouselWrapper: Styled.div`
            position: relative;
        `,
        CarouselImageWrapper: Styled.div`
            grid-area: image;
            height: 100%;
        `,
        iconContainer: Styled.span`
            height: 2.5rem;
            padding: 0 .5rem;
            font-size: .75rem;
            line-height: 1.33333;
        `,
        ExitPane: Styled.div`
            padding: 1.5625rem 2.3125rem;
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
        Content: Styled.div`
            padding: 1.87rem 1.87rem 3.125rem;
            overflow: auto;
            height: 100%;
        `,
        button: Styled.button`
            display: block;
            position: absolute;
            top: 50%;
            visibility: hidden;
            opacity: 0;
            transition: opacity .2s,visibility 0ms .2s;
            cursor: pointer;
            z-index: 1;
            transform: translateY(-50%);
            justify-content: center;
            align-items: center;
            text-align: center;
            border: 0;
            padding: 0;
            box-sizing: border-box;
            background: transparent;
            border-radius: 52px;
            vertical-align: top;
            color: #111;
            left: 1.875rem;
        `,
        slidesBody: Styled.div`
            display: flex;
            flex-wrap: nopwrap;
            align-items: center;
        `,
        slideContainer: Styled.div`
            max-width: 100%;
            position: relative;
            scroll-snap-align: start;
            scroll-snap-stop: always;
            display: block;
            padding-left: 6.25rem;
            padding-right: 6.25rem;
        `,
        ImageFormat: Styled.div`
            cursor: zoom-in;
            background-repeat: no-repeat;
            background-size: ${(props) => props.zoomed ? '200%' : '100%'};
            will-change: background-position;
            max-height: 75vh;
            max-width: 100%;
            display: inline-block;
            background-position: 51.5314% 60.8527%;
        `
    }
};


export default styles;
