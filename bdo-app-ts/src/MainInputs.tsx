import React, { Component } from 'react';

function potato() {
    console.log('ass');
}

class MainInputs extends Component {
    render() {
        return (
            <div className="main-inputs">
                <div className="input-button a-input-button">
                    <input
                        type="text"
                        name="item-name"
                        className="item-name-input main-input a-item-name-input"
                        placeholder="Item"
                    ></input>
                    <button
                        onClick={potato}
                        className="calc-button a-calc-button"
                    >
                        >
                    </button>
                </div>
                <input
                    type="text"
                    name="base-item-cost"
                    className="base-item-input item-small-input main-input"
                    placeholder="Base Item Cost"
                ></input>
                <input
                    type="text"
                    name="pre-enhance-item-cost"
                    className="pre-enhance-item-input item-small-input main-input"
                    placeholder="Pre-Enhance Item Cost"
                ></input>
                <input
                    type="text"
                    name="post-enhance-item-cost"
                    className="post-enhance-item-input item-small-input main-input"
                    placeholder="Post-Enhance Item Cost"
                ></input>
            </div>
        );
    }
}

export default MainInputs;
