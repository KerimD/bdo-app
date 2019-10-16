import React, { Component } from 'react';

interface MainInputsType {
    nameItem: string;
    baseC: string;
    preC: string;
    postC: string;
}

interface Props {
    handleCalculate: (inputs: MainInputsType) => void;
}

interface State {
    mainInputs: MainInputsType;
}

class MainInputs extends Component<Props, State> {
    state: State = {
        mainInputs: {
            nameItem: '',
            baseC: '',
            preC: '',
            postC: ''
        }
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value }: { name: string; value: string } = event.target;

        this.setState(state => ({
            mainInputs: {
                ...state.mainInputs,
                [name]: value
            }
        }));
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
        // Object.keys(this.state.mainInputs).forEach(key => {
        //     if (this.state.mainInputs[key as keyof MainInputsType] == '') {
        //         return false;
        //     }
        // });

        let inputs: HTMLCollectionOf<Element> = document.getElementsByClassName(
            'main-input'
        );

        for (let input of inputs as any) {
            if (input.value == '') {
                console.log('User left blank input(s)');
                return false;
            }
        }

        return true;
    };

    submitInputs = () => {
        if (this.validInputs()) {
            // this.moveInputs();
            this.props.handleCalculate(this.state.mainInputs);
        }
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
