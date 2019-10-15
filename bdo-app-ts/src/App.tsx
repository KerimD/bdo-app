import React, { Component } from 'react';
import MainInputs from './MainInputs';
import Tables from './Tables';

interface mainInputs {
    nameItem: string;
    baseC: number;
    preC: number;
    postC: number;
}

class App extends Component {
    state = {
        mainInputs: {}
    };

    handleCalculate = (inputs: any) => {
        console.log(inputs);
        // this.setState({ mainInputs: inputs });
    };

    render() {
        return (
            <div>
                <Tables />
                <MainInputs handleCalculate={this.handleCalculate} />
            </div>
        );
    }
}

export default App;
