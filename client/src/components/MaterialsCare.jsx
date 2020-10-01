import React from 'react';

class MaterialsCare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productInformation: ['testtest', 'testtest', 'testtest', 'testtest', 'testtest'],
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
            productInformation: props.information,
            clicked: false
        }
    }
    render() {
        return (
            <div id="materialscare header">
                <div id='materialscare title' onClick={() => this.handleClick()} >Matrials &amp; care</div>
                <a className='showmaterials arrow' />
                <div id='materialscare info'>
                    {this.state.productInformation.map((snippet, index) => {
                        return (<div key={snippet + index}>{snippet}</div>);
                    })}
                </div>
            </div>

        )
    }
}

export default MaterialsCare;
