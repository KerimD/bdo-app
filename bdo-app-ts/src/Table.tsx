import React, { useState } from 'react';

interface IProps {
    inputs: Inputs;
}

interface Inputs {
    name: string;
    baseC: string;
    preC: string;
    postC: string;
}

const Table: React.FC<IProps> = (props: IProps): JSX.Element => {
    const [itemType, setItemType] = useState<string>('Accessory');
    const [currLvl, setcurrLvl] = useState<string>('TET');
    const [desiredLvl, setDesiredLvl] = useState<string>('PEN');
    const [success, setSuccess] = useState<string>('.0344');
    const [result, setResult] = useState<string>('-12760294.515');
    const [fs, setFs] = useState<string>('59');
    const [costFs, setCostFs] = useState<string>('340549441.267');

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

const calculate = (
    itemType: string,
    fs: string,
    currLvl: string,
    itemCosts: Inputs
): string => {
    return 'ass';
};

export default Table;
