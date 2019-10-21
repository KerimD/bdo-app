import React, { useState } from 'react';
import Table from './Table';
import { element } from 'prop-types';

interface IProps {
    inputs: Inputs;
}

interface Inputs {
    name: string;
    baseC: string;
    preC: string;
    postC: string;
}

const Tables: React.FC<IProps> = (props: IProps): JSX.Element => {
    const [currLvl, setCurrLvl] = useState<string>('PEN');

    return (
        <section className="main-section">
            <div className="tables">
                <div></div>
                <Table inputs={props.inputs} currLvl={currLvl} />
                <Table inputs={props.inputs} currLvl={currLvl} />
                <Table inputs={props.inputs} currLvl={currLvl} />
                <Table inputs={props.inputs} currLvl={currLvl} />
                <Table inputs={props.inputs} currLvl={currLvl} />
                <Table inputs={props.inputs} currLvl={currLvl} />
                <div></div>
            </div>
        </section>
    );
};

export default Tables;
