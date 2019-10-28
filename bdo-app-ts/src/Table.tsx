import React, { useState, useEffect } from 'react';

interface IProps {
    inputs: Inputs;
    currLvl: string;
    costFs: number[];
}

interface Inputs {
    type: string;
    baseC: string;
    preC: string;
    postC: string;
}

const Table: React.FC<IProps> = (props: IProps): JSX.Element => {
    return (
        <div className="fs-table">
            <div className="fs-table-title">
                <div className="fs-col-title fs-col">Fs</div>
                <div className="cost-col-title cost-col">Cost</div>
            </div>

            <div className="values-fs-table">{calculateCosts(props)}</div>
        </div>
    );
};

const calculateCost = (fs: number, props: IProps): string => {
    const { inputs, currLvl, costFs } = props;

    // get success from fs, currLvl, and itemType
    let success: number = 0;

    // get cost of failstack from fs
    let costCurrFs: number = costFs[fs];

    // get cost of next failstack from fs
    let costNextFs: number = costFs[fs + 1];

    let fail: number = 1 - success;

    let cost: number =
        fail *
            (costNextFs -
                costCurrFs -
                parseFloat(inputs.baseC) -
                parseFloat(inputs.preC)) +
        success *
            (parseFloat(inputs.postC) -
                costCurrFs -
                parseFloat(inputs.baseC) -
                parseFloat(inputs.preC));

    return String(cost);
};

const calculateCosts = (props: IProps): JSX.Element[] => {
    let costs: JSX.Element[] = new Array(242);
    let everyOther: boolean = true;

    for (let fs = 0; fs < 242; fs++) {
        if (everyOther) {
            costs[fs] = (
                <div key={fs / 2} className="fs-col">
                    {fs / 2}
                </div>
            );
            fs++;
            costs[fs] = (
                <div key={'cost' + String(fs)} className="cost-col">
                    00000000
                </div>
            );
            everyOther = false;
        } else {
            costs[fs] = (
                <div key={fs / 2} className="fs-col darker-green">
                    {fs / 2}
                </div>
            );
            fs++;
            costs[fs] = (
                <div
                    key={'cost' + String(fs)}
                    className="cost-col darker-green"
                >
                    00000000
                </div>
            );
            everyOther = true;
        }
    }

    return costs;
};

export default Table;
