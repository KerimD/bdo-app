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
            <button className="scroll-left scroll-button">&laquo;</button>
            <div className="tables">
                <Table inputs={props.inputs} currLvl={currLvl} />
                {/* <Table inputs={props.inputs} />
                <Table inputs={props.inputs} />
                <Table inputs={props.inputs} />
                <Table inputs={props.inputs} />
                <Table inputs={props.inputs} /> */}
            </div>
            <button className="scroll-right scroll-button">&raquo;</button>
        </section>
    );
};

export default Tables;
