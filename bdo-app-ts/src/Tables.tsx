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

const Tables: React.FC<IProps> = (props: IProps) => {
    const [inputs, setInputs] = useState<Inputs>(props.inputs)

    return (
        <div>
            Hey
        </div>
    )
}

export default Tables;

// import React, { Component } from 'react';
// import Table from './Table';

// interface MainInputsType {
//     nameItem: string;
//     baseC: string;
//     preC: string;
//     postC: string;
// }

// interface Props {
//     mainInputs: MainInputsType;
// }

// class Tables extends Component<Props> {
//     render() {
//         const { nameItem, baseC, preC, postC } = this.props.mainInputs;

//         return (
//             <div>
//                 <p className="temp">
//                     Name: {nameItem}, Base: {baseC}, Pre: {preC}, Post: {postC}
//                 </p>
//             </div>
//         );
//     }
// }

// export default Tables;
