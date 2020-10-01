import React from 'react';

class Packaging extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productInformation: {},
            clicked: false
        };
        this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        });
    }
    static getDerivedStateFromProps(props, state) {
        return {
            productInformation: props.item,
            clicked: false
        }
    }
    render() {
        return (
            <div id="packaging header">
                <div id='packaging title' onClick={() => this.handleClick()} >Sustainability &amp; environment</div>
                <a className='packaging arrow' />
                <div id='packaging details'>
                    <div>Import and render packaging object</div>
                </div>
            </div>

        )
    }
}

export default Packaging;
