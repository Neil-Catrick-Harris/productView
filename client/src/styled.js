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
        object-fit: cover;
        width: 100%;
        height: 100%;
        `,
    imageContainer: Styled.div`
        cursor: pointer;
    `,
    imageWrapper: Styled.div`
        flex: none;
        margin-left: .625rem;
        margin-right: .625rem;
        margin-bottom: 1.25rem;
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
            padding-left: 20px;
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
            height: auto;
            opacity: 1;
        `,
        items: Styled.div`
            margin-bottom: 0;
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
            width: 31.25rem;
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
            text-decoration: none;
            -webkit-box-pack: center;
            justify-content: center;
            align-items: center;
            border: 0;
            line-height: 1.42857;
            padding: 0;
            -o-transition-duration: .1s;
            transition-duration: .1s;
            transition-timing-function: cubic-bezier(.4,0,.4,1);
            cursor: pointer;
            box-sizing: border-box;
            background: transparent;
            border-radius: 52px;
            vertical-align: top;
        `,
        Content: Styled.div`
            padding: 0;
            overflow: auto;
            height: 100%;
        `,
        button: Styled.button`
            display: block;
            position: absolute;
            top: 50%;
            cursor: pointer;
            z-index: 1;
            justify-content: center;
            align-items: center;
            text-align: center;
            border: 0;
            padding: 0;
            box-sizing: border-box;
            border-radius: 52px;
            color: #111;
        `,
        slide: Styled.div`
            max-height: 75vh;
            max-width: 100%;
            display: inline-block;
            cursor: zoom-in;
            background-repeat: no-repeat;
            background-size: 100%;
            will-change: background-position;
        `,
        slideContainer: Styled.ul`
            align-items: center;
            display: flex;
            flex-wrap: nowrap;
        `,
        slideWrapper: Styled.li`
            position: relative;
            margin-right: 0;
            margin-left: 0;
            scroll-snap-align: center;
            scroll-snap-stop: always;
            width: 100%;
            display: block;
            text-align: center;
            padding-left: 6.25rem;
            padding-right: 6.25rem;
            flex-shrink: 0;
        `,
        slideImage: Styled.div`
        background: 20
        `,
        scrollButton: Styled.button`
            height: 1.375rem;
            position: relative;
            width: 100%;
            outline: none;
            border: 0;
            padding: 0;
            background: transparent;
            display: block;
        `,
        ScrollButtonContainer: Styled.span`
                width: 100%;
                background: #dfdfdf;
                transform: translateX(0);
                height: .12rem;
                display: block;
        `,
        scrollButtonHighlight: Styled.span`
            will-change: transform;
            background: #111;
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            transform-origin: 0 0;
            display: block;
        `
    }
};


export default styles;
