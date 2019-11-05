import React, { SFC } from "react";

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

const Table: SFC<IProps> = (props: IProps): JSX.Element => {
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

const fetchSuccessChance = (type: string, fs: number, lvl: string): number => {
  return 0;
};

// currently only working for accessories
const calculateCost = (fs: number, props: IProps): string => {
  const { inputs, currLvl, costFs } = props;

  // get success from fs, currLvl, and itemType
  let success: number = fetchSuccessChance(inputs.type, fs, currLvl);

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
  let fsCol: string = "fs-col";
  let costCol: string = "cost-col";

  for (let fs = 0; fs < 242; fs++) {
    costs[fs] = (
      <div key={fs / 2} className={fsCol}>
        {fs / 2}
      </div>
    );

    fs++;

    costs[fs] = (
      <div key={"cost" + String(fs)} className={costCol}>
        {calculateCost(fs / 2, props)}
      </div>
    );

    // alows me to style every other element as slightly darker
    if (everyOther) {
      everyOther = false;
      fsCol = "fs-col darker-green";
      costCol = "cost-col darker-green";
    } else {
      everyOther = true;
      fsCol = "fs-col";
      costCol = "cost-col";
    }
  }

  return costs;
};

export default Table;
