import React from 'react';

class Sustainability extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productInformation: null,
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
        return  {
            productInformation: props.item.description
        }
    }
    render() {
        return (
            <div id="sustainibility header">
                <div id='sustainibility title' onClick={() => this.handleClick()} >Sustainability &amp; environment</div>
                <a className='sustainibility arrow' />
                <div id='sustainibility info'>{this.state.productInformation}</div>
            </div>

        )
    }
}

export default Sustainability;
