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
            <div>
                <div onClick={() => this.handleClick()} >Sustainability &amp; environment</div>
                <a id='arrow' />
                <div>{this.state.productInformation}</div>
            </div>

        )
    }
}

export default Sustainability;
