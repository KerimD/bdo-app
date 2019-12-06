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

    fetchFs();
  }, []);

  useEffect(() => {
    // this is just a warning/recomendation
    // must include functions inside of useEffect cuz hard to track props used
    const fetchSuccesschance = async () => {
      let res = await fetch(`${API_URI}/accessory`);
      let data = await res.json();
      setChance(data);
    };

    fetchSuccesschance();
  }, [inputs.typeItem]);

  const arrTables = (): JSX.Element[] | undefined => {

    // conditional render
    if (costFs.length && chance.length && inputs.typeItem) {
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
        ); // map
      }
    }
  }; // end arrTables()

  return (
    <div className="tables">
      { arrTables() }
    </div>
  );
};

export default Tables;
// create a button component that takes left or right as props and controls the whatever idk what's going on tbh
