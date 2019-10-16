import React, { Component } from 'react';
import Table from './Table';

interface MainInputsType {
    nameItem: string;
    baseC: string;
    preC: string;
    postC: string;
}

interface Props {
    mainInputs: MainInputsType;
}

class Tables extends Component<Props> {
    render() {
        const { nameItem, baseC, preC, postC } = this.props.mainInputs;

        return (
            <div>
                <p className="temp">
                    Name: {nameItem}, Base: {baseC}, Pre: {preC}, Post: {postC}
                </p>
            </div>
        );
    }
}

export default Tables;
