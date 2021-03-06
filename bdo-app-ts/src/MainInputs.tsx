import React, { FC, useState } from 'react';

interface IProps {
    handleInputs: (inputs: Inputs) => void;
}

interface Inputs {
    typeItem: string;
    baseC: string;
    preC: string;
    postC: string;
}

const MainInputs: FC<IProps> = (props: IProps): JSX.Element => {
    const [inputs, setInputs] = useState<Inputs>({
        typeItem: 'accessory',
        baseC: '9000000',
        preC: '16000000',
        postC: '44000000'
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value }: { name: string; value: string } = event.target;

        console.log(name);
        setInputs({ ...inputs, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        let valid: boolean = true;

        // check to make sure everything has a value
        Object.values(inputs).forEach((value) => {
          if (!value.length) {
            valid = false;
            return;
          }
        });

        if (valid) {
            props.handleInputs(inputs);
            moveInputs();
        }

        setTimeout(() => {
            let tables = document.getElementsByClassName(
                'tables'
            ) as HTMLCollectionOf<HTMLElement>;
            tables[0].style.display = 'grid';
        }, 700);
    };

    return (
        <form className="main-inputs" onSubmit={handleSubmit}>
            <div className="select-type">
                <input
                    type="radio"
                    id="armor"
                    name="typeItem"
                    value="armor"
                    onChange={handleChange}
                ></input>
                <label className="armor" htmlFor="armor">
                    Armor
                </label>

                <input
                    type="radio"
                    id="weapon"
                    name="typeItem"
                    value="weapon"
                    onChange={handleChange}
                ></input>
                <label className="weapon" htmlFor="weapon">
                    Weapon
                </label>

                <input
                    type="radio"
                    id="accy"
                    name="typeItem"
                    value="accessory"
                    onChange={handleChange}
                ></input>
                <label className="accy" htmlFor="accy">
                    Accessory
                </label>
            </div>

            <input
                type="text"
                name="baseC"
                className="base-item-input main-input"
                placeholder="Base Item Cost"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="preC"
                className="pre-enhance-item-input main-input"
                placeholder="Pre-Enhance Item Cost"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="postC"
                className="post-enhance-item-input main-input"
                placeholder="Post-Enhance Item Cost"
                onChange={handleChange}
            ></input>
            <button className="submit-button" type="submit" value="Submit">
                Submit
            </button>
        </form>
    );
};

export default MainInputs;

const moveInputs = (): void => {
    // select type
    document
        .getElementsByClassName('select-type')[0]
        .classList.add('a-select-type');

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

    // button
    document
        .getElementsByClassName('submit-button')[0]
        .classList.add('a-submit-button');
};
