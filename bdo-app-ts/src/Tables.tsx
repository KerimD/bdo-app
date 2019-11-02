import React, { FC, useState, useEffect } from 'react';
import Table from './Table';

const API_URI: string = "http://localhost:8000";

interface IProps {
    inputs: Inputs;
}

interface Inputs {
    type: string;
    baseC: string;
    preC: string;
    postC: string;
}

const Tables: FC<IProps> = ({ inputs }): JSX.Element => {
    const [costFs, setCostFs] = useState<number[]>([]);

    const fetchFs = async () => {
        let res = await fetch(`${API_URI}/fs`);
        let data = await res.json();
        setCostFs(data);
    }

    useEffect(() => {fetchFs()}, []);

    return (
        <div className="tables">
            { arrTables(inputs, costFs) }
        </div>
    );
};

export default Tables;

const arrTables = (inputs: Inputs, costFs: number[]): JSX.Element[] => {
    let accy: string[] = ['PRI', 'DUO', 'TRI', 'TET', 'PEN'];

    // type accy
    if (inputs.type === 'accessory' || true) {
        return accy.map((type: string): JSX.Element => <Table
                    key={type}
                    inputs={inputs}
                    currLvl={type}
                    costFs={costFs}
                />
        );
    }
};

// create a button component that takes left or right as props and controls the whatever idk what's going on tbh
