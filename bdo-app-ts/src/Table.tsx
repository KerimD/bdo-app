import React, { useState } from 'react';

interface IProps {
    inputs: Inputs;
    currLvl: string;
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

            <div className="values-fs-table">
                {calculateCosts(props.currLvl, props.inputs)}
            </div>
        </div>
    );
};

// result = -12,760,294.515
const calculateCost = (
    fs: string,
    currLvl: string,
    itemCosts: Inputs
): string => {
    // get success from fs, currLvl, and itemType
    let success: number = parseFloat('.0344');

    // get cost of failstack from fs
    let costCurrFs: number = parseFloat('340549441.267');

    // get cost of next failstack from fs
    let costNextFs: number = parseFloat('');

    let fail: number = 1 - success;

    let cost: number;

    cost =
        fail *
            (costNextFs -
                costCurrFs -
                parseFloat(itemCosts.baseC) -
                parseFloat(itemCosts.preC)) +
        success *
            (parseFloat(itemCosts.postC) -
                costCurrFs -
                parseFloat(itemCosts.baseC) -
                parseFloat(itemCosts.preC));

    return String(cost);
};

const calculateCosts = (currLvl: string, itemCosts: Inputs): JSX.Element[] => {
    let costs: JSX.Element[] = new Array(121);
    let everyOther: boolean = true;

    for (let fs = 0; fs < 121; fs++) {
        if (everyOther) {
            costs = [
                ...costs,
                <div key={fs} className="fs-col">
                    {fs}
                </div>,
                <div key={fs + 122} className="cost-col">
                    00000000
                </div>
            ];
            everyOther = false;
        } else {
            costs = [
                ...costs,
                <div key={fs} className="fs-col darker-green">
                    {fs}
                </div>,
                <div key={fs + 122} className="cost-col darker-green">
                    00000000
                </div>
            ];
            everyOther = true;
        }
    }

    return costs;
};

export default Table;
