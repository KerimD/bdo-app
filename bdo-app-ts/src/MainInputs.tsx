import React, { Component } from 'react';

interface Props {
    handleCalculate: (inputs: any) => void;
}

interface State {
    mainInputs: {
        nameItem: string;
        baseC: number;
        preC: number;
        postC: number;
    };
}

class MainInputs extends Component<Props, State> {
    state = {
        mainInputs: {
            nameItem: '',
            baseC: 0,
            preC: 0,
            postC: 0
        }
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        // Learn how set state works when you get up retard
        // this.setState({ name: value });
    };

    moveInputs = () => {
        // input button
        document
            .getElementsByClassName('input-button')[0]
            .classList.add('a-input-button');

        // input
        document
            .getElementsByClassName('item-name-input')[0]
            .classList.add('a-item-name-input');

        // button
        document
            .getElementsByClassName('calc-button')[0]
            .classList.add('a-calc-button');

        // base
        document
            .getElementsByClassName('base-item-input')[0]
            .classList.add('a-base-item-input');

        // pre
        document
            .getElementsByClassName('pre-enhance-item-input')[0]
            .classList.add('a-pre-enhance-item-input');

        // post
        document
            .getElementsByClassName('post-enhance-item-input')[0]
            .classList.add('a-post-enhance-item-input');
    };

    validInputs = () => {
        let inputs: any = document.getElementsByClassName('main-input');
        return true;
    };

    submitInputs = () => {
        // if (this.validInputs()) {
        //     this.moveInputs();
        // }
        this.props.handleCalculate(this.state);
    };

    render() {
        return (
            <div className="main-inputs">
                <div className="input-button">
                    <input
                        type="text"
                        name="nameItem"
                        className="item-name-input main-input"
                        placeholder="Item"
                        onChange={this.handleChange}
                    ></input>
                    <button onClick={this.submitInputs} className="calc-button">
                        >
                    </button>
                </div>
                <input
                    type="text"
                    name="baseC"
                    className="base-item-input item-small-input main-input"
                    placeholder="Base Item Cost"
                    onChange={this.handleChange}
                ></input>
                <input
                    type="text"
                    name="preC"
                    className="pre-enhance-item-input item-small-input main-input"
                    placeholder="Pre-Enhance Item Cost"
                    onChange={this.handleChange}
                ></input>
                <input
                    type="text"
                    name="postC"
                    className="post-enhance-item-input item-small-input main-input"
                    placeholder="Post-Enhance Item Cost"
                    onChange={this.handleChange}
                ></input>
            </div>
        );
    }
}

export default MainInputs;
