import React, { useState } from 'react';
import MainInputs from './MainInputs';
import Tables from './Tables';

interface Inputs {
    type: string;
    baseC: string;
    preC: string;
    postC: string;
}

const App: React.FC<{}> = (): JSX.Element => {
    const [inputs, setInputs] = useState<Inputs>({
        type: '',
        baseC: '',
        preC: '',
        postC: ''
    });

    const handleInputs = (e: Inputs): void => {
        setInputs(e);
    };

    return (
        <div>
            <Tables inputs={inputs} />
            <MainInputs handleInputs={handleInputs} />
        </div>
    );
};

export default App;
