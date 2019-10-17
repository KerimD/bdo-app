import React, { useState } from 'react';
import { string } from 'prop-types';

interface IProps {
    inputs: Inputs;
    currLvl: string;
}

interface Inputs {
    name: string;
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
    let success: string = '.0344';

    // get cost of failstack from fs
    let costCurrFs: string = '340549441.267';

    // get cost of next failstack from fs
    let costNextFs: string = '';

    return 'cost';
};

const calculateCosts = (currLvl: string, itemCosts: Inputs): string[] => {
    let cost: string = calculateCost('59', currLvl, itemCosts);
    console.log(cost);

    // for (let fs = 0; fs < 121; fs++) {
    //     console.log(fs);
    // }

    return [cost];
};

export default Table;
