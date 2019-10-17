import React, { useState } from 'react';
import MainInputs from './MainInputs';
import Tables from './Tables';

interface Inputs {
    name: string;
    baseC: string;
    preC: string;
    postC: string;
}

const App: React.FC<{}> = (): JSX.Element => {
    const [inputs, setInputs] = useState<Inputs>({
        name: 'None',
        baseC: 'None',
        preC: 'None',
        postC: 'None'
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

// import React, { Component } from 'react';
// import MainInputs from './MainInputs';
// import Tables from './Tables';

// interface MainInputsType {
//     nameItem: string;
//     baseC: string;
//     preC: string;
//     postC: string;
// }

// interface Props {}

// interface State {
//     mainInputs: MainInputsType;
// }

// class App extends Component<Props, State> {
//     state: State = {
//         mainInputs: {
//             nameItem: '',
//             baseC: '',
//             preC: '',
//             postC: ''
//         }
//     };

//     handleCalculate = (inputs: MainInputsType) => {
//         console.log('calculating...');

//         this.setState({ mainInputs: inputs });
//     };

//     render() {
//         return (
//             <div>
//                 <Tables mainInputs={this.state.mainInputs} />
//                 <MainInputs handleCalculate={this.handleCalculate} />
//             </div>
//         );
//     }
// }

// export default App;
