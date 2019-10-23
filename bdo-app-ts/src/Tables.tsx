import React, { useState } from 'react';
import Table from './Table';

interface IProps {
    inputs: Inputs;
}

interface Inputs {
    type: string;
    baseC: string;
    preC: string;
    postC: string;
}

const Tables: React.FC<IProps> = (props: IProps): JSX.Element => {
    const { inputs } = props;

    return (
        <section className="main-section">
            <div className="tables">
                <div></div>
                {arrTables(inputs)}
                <div></div>
            </div>
        </section>
    );
};

export default Tables;

const arrTables = (inputs: Inputs): JSX.Element[] => {
    let arr: JSX.Element[] = [];

    let accy: string[] = ['PRI', 'DUO', 'TRI', 'TET', 'PEN']

    // type accy
    if (inputs.type === 'accessory') {
        for (let type of accy) {
            arr = [...arr, <Table key={type} inputs={inputs} currLvl={type} />]
        }
    }

    return arr;
};
