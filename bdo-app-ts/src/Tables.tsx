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
    const tables: JSX.Element[] = arrTables(inputs);

    return (
        <section className="main-section">
            <div className="tables">
                <div></div>
                {tables}
                <Table key={'PEN'} inputs={inputs} currLvl={'PEN'} />
                <Table key={'PEN'} inputs={inputs} currLvl={'PEN'} />
                <Table key={'PEN'} inputs={inputs} currLvl={'PEN'} />
                <Table key={'PEN'} inputs={inputs} currLvl={'PEN'} />
                <div></div>
            </div>
        </section>
    );
};

export default Tables;

const arrTables = (inputs: Inputs): JSX.Element[] => {
    return [<Table key={'PEN'} inputs={inputs} currLvl={'PEN'} />];
};
