import React, { Component } from 'react';
import Table from './Table';

interface Props {
    mainInputs?: {
        nameItem: string;
        baseC: number;
        preC: number;
        postC: number;
    };
}

class Tables extends Component<Props> {
    render() {
        return <div>ass</div>;
        // const { name, baseC, preC, postC } = this.props.mainInputs;
        // return (
        //     <div>
        //         <p className="temp">
        //             Name: {name}, Base: {baseC}, Pre: {preC}, Post: {postC}
        //         </p>
        //     </div>
        // );
    }
}

export default Tables;
