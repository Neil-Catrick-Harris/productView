import React from 'react';

class Sustainability extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productInformation: 'generic text generic text generic text generic text generic text generic text ',
            clicked: false
        };
        this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        });
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
