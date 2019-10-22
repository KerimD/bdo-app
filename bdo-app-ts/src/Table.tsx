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
                <div className="fs-col">0</div>
                <div className="cost-col">-345349</div>
                <div className="fs-col darker-green">0</div>
                <div className="cost-col darker-green">-25,000.000</div>
                <div className="fs-col">0</div>
                <div className="cost-col">-345349</div>
                <div className="fs-col darker-green">0</div>
                <div className="cost-col darker-green">-345349</div>
                <div className="fs-col">0</div>
                <div className="cost-col">-345349</div>
                <div className="fs-col darker-green">0</div>
                <div className="cost-col darker-green">-345349</div>
                <div className="fs-col">0</div>
                <div className="cost-col">-345349</div>
                <div className="fs-col darker-green">0</div>
                <div className="cost-col darker-green">-345349</div>
                <div className="fs-col">0</div>
                <div className="cost-col">-345349</div>
                <div className="fs-col darker-green">0</div>
                <div className="cost-col darker-green">-345349</div>
                <div className="fs-col">0</div>
                <div className="cost-col">-345349</div>
                <div className="fs-col darker-green">0</div>
                <div className="cost-col darker-green">-345349</div>
                <div className="fs-col">0</div>
                <div className="cost-col">-345349</div>
                <div className="fs-col darker-green">0</div>
                <div className="cost-col darker-green">-345349</div>
                <div className="fs-col">0</div>
                <div className="cost-col">-345349</div>
                <div className="fs-col darker-green">0</div>
                <div className="cost-col darker-green">-345349</div>
                <div className="fs-col">0</div>
                <div className="cost-col">-345349</div>
                <div className="fs-col darker-green">0</div>
                <div className="cost-col darker-green">-25,000.000</div>
                <div className="fs-col">0</div>
                <div className="cost-col">-345349</div>
                <div className="fs-col darker-green">0</div>
                <div className="cost-col darker-green">-345349</div>
                <div className="fs-col">0</div>
                <div className="cost-col">-345349</div>
                <div className="fs-col darker-green">0</div>
                <div className="cost-col darker-green">-345349</div>
                <div className="fs-col">0</div>
                <div className="cost-col">-345349</div>
                <div className="fs-col darker-green">0</div>
                <div className="cost-col darker-green">-345349</div>
                <div className="fs-col">0</div>
                <div className="cost-col">-345349</div>
                <div className="fs-col darker-green">0</div>
                <div className="cost-col darker-green">-345349</div>
                <div className="fs-col">0</div>
                <div className="cost-col">-345349</div>
                <div className="fs-col darker-green">0</div>
                <div className="cost-col darker-green">-345349</div>
                <div className="fs-col">0</div>
                <div className="cost-col">-345349</div>
                <div className="fs-col darker-green">0</div>
                <div className="cost-col darker-green">-345349</div>
                <div className="fs-col">0</div>
                <div className="cost-col">-345349</div>
                <div className="fs-col darker-green">0</div>
                <div className="cost-col darker-green">-345349</div>
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
    // get item type from name
    let itemType: string = 'Accessory';

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

const calculateCosts = (currLvl: string, itemCosts: Inputs): string[] => {
    let costs: string[] = new Array(121);
    let cost: string = calculateCost('59', currLvl, itemCosts);
    console.log(cost);
    costs[0] = cost;

    // for (let fs = 0; fs < 121; fs++) {
    //       cost = calculateCost(String(fs), currLvl, itemCosts);
    //       costs[fs] = cost;
    // }

    return costs;
};

export default Table;
