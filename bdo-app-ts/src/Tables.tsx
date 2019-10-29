import React, { useState, useEffect } from 'react';
import Table from './Table';
import { async } from 'q';
import { promises } from 'dns';

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
    const [costFs, setCostFs] = useState<number[]>([]);
    console.log('test async');

    const fetchFs = async () => {
        let res = await fetch('http://localhost:8000/fs');
        let data = await res.json();
        setCostFs(data);
    }

    useEffect(() => {fetchFs()}, []);

    return (
        <section className="main-section">
            <div className="tables">
                <div></div>
                {arrTables(props.inputs, costFs)}
                <div></div>
            </div>
        </section>
    );
};

export default Tables;

const arrTables = (inputs: Inputs, costFs: number[]): JSX.Element[] => {
    let arr: JSX.Element[] = [];
    let accy: string[] = ['PRI', 'DUO', 'TRI', 'TET', 'PEN'];

    // type accy
    if (inputs.type === 'accessory' || true) {
        for (let type of accy) {
            arr = [
                ...arr,
                <Table
                    key={type}
                    inputs={inputs}
                    currLvl={type}
                    costFs={costFs}
                />
            ];
        }
    }

    return arr;
};
