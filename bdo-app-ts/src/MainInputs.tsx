import React, { useState } from 'react';

interface IProps {
    handleInputs: (inputs: Inputs) => void;
}

interface Inputs {
    name: string;
    baseC: string;
    preC: string;
    postC: string;
}

const MainInputs: React.FC<IProps> = (props: IProps): JSX.Element => {
    const [inputs, setInputs] = useState<Inputs>({
        name: 'Red Coral Earing',
        baseC: '9000000',
        preC: '16000000',
        postC: '44000000'
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value }: { name: string; value: string } = event.target;

        setInputs({ ...inputs, [name]: value });
    };

    const submitInputs = () => {
        if (validInputs()) {
            props.handleInputs(inputs);
            moveInputs();

            // show tables
            let tables = document.getElementsByClassName(
                'tables'
            ) as HTMLCollectionOf<HTMLElement>;
            tables[0].style.display = 'grid';
        }
    };

    return (
        <div className="main-inputs">
            <div className="input-button">
                <input
                    type="text"
                    name="name"
                    className="item-name-input main-input"
                    placeholder="Item"
                    onChange={handleChange}
                ></input>
                <button onClick={submitInputs} className="calc-button">
                    >
                </button>
            </div>
            <input
                type="text"
                name="baseC"
                className="base-item-input item-small-input main-input"
                placeholder="Base Item Cost"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="preC"
                className="pre-enhance-item-input item-small-input main-input"
                placeholder="Pre-Enhance Item Cost"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="postC"
                className="post-enhance-item-input item-small-input main-input"
                placeholder="Post-Enhance Item Cost"
                onChange={handleChange}
            ></input>
        </div>
    );
};

const validInputs = (): boolean => {
    return true;
    let inputs: HTMLCollectionOf<Element> = document.getElementsByClassName(
        'main-input'
    );

    for (let input of inputs as any) {
        if (input.value == '') {
            console.log('User left blank input(s)');
            return false;
        }
    }

    return true;
};

const moveInputs = (): void => {
    // input button
    document
        .getElementsByClassName('input-button')[0]
        .classList.add('a-input-button');

    // input
    document
        .getElementsByClassName('item-name-input')[0]
        .classList.add('a-item-name-input');

    // button
    document
        .getElementsByClassName('calc-button')[0]
        .classList.add('a-calc-button');

    // base
    document
        .getElementsByClassName('base-item-input')[0]
        .classList.add('a-base-item-input');

    // pre
    document
        .getElementsByClassName('pre-enhance-item-input')[0]
        .classList.add('a-pre-enhance-item-input');

    // post
    document
        .getElementsByClassName('post-enhance-item-input')[0]
        .classList.add('a-post-enhance-item-input');
};

export default MainInputs;
