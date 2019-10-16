import React, { useState } from 'react';

interface inputs {
    name: string;
    baseC: string;
    preC: string;
    postC: string;
}

const App: React.FC<{}> = (): JSX.Element => {
    const [inputs, setInputs] = useState<inputs>({
        name: '',
        baseC: '',
        preC: '',
        postC: ''
    });

    const handleCalculate = (e: inputs): void => {
        setInputs(e);
    };

    return (
        <div>
            {/* <Tables inputs={inputs} />
            <MainInputs handleCalculate={handleCalculate} /> */}
        </div>
    );
};

export { App };

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
