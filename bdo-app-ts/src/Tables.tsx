import React, { FC, useState, useEffect } from 'react';
import Table from './Table';

const API_URI: string = "http://localhost:8000";

interface IProps {
  inputs: Inputs;
}

interface Inputs {
  typeItem: string;
  baseC: string;
  preC: string;
  postC: string;
}

const Tables: FC<IProps> = ({ inputs }): JSX.Element => {
  const [costFs, setCostFs] = useState<number[]>([]);
  const [chance, setChance] = useState<number[][]>([]);

  useEffect(() => {

    const fetchFs = async () => {
      let res = await fetch(`${API_URI}/fs`);
      let data = await res.json();
      setCostFs(data);
    };

    // must include functions inside of useEffect cuz hard to track props used
    const fetchSuccesschance = async () => {
      let res = await fetch(`${API_URI}/${inputs.typeItem}`);
      let data = await res.json();
      setChance(data);
    };

    // callback
    fetchFs();
    fetchSuccesschance();
  }, [inputs.typeItem]);

  return (
    <div className="tables">
      { arrTables(inputs, costFs, chance) }
    </div>
  );
};

const arrTables = (inputs: Inputs, costFs: number[], chance: number[][]): JSX.Element[] => {
  let accy: string[] = ['PRI', 'DUO', 'TRI', 'TET', 'PEN'];

  // type accy
  if (inputs.typeItem === 'accessory' || true) {
    return accy.map((itemLevel: string): JSX.Element => <Table
              key={itemLevel}
              inputs={inputs}
              currLvl={itemLevel}
              costFs={costFs}
              chance={chance}
          />
    );
  }
};

export default Tables;
// create a button component that takes left or right as props and controls the whatever idk what's going on tbh
