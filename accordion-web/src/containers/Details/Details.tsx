import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import './Details.scss'

const Details = () => {
    const [inputValue, setInputValue] = useState('')
    const [titleValue, setTitleValue] = useState('')

    const occupation = useRef('');
    const residence = useRef('');

    const location = useLocation();

    useEffect(() => {
        setTitleValue(location.state.name);
        setInputValue(location.state.name);

        occupation.current = location.state.occupation;
        residence.current = location.state.residence;

    }, [location.state])

    const handleButtonOnChange = (e: any) => {
        const target = e.target;
        const value = target.value;

        setInputValue(value);
    }

    const handleTitleValue = () => {
        setTitleValue(inputValue)
    }


    return (
        <div className="Details">
            <a href="/">
                BACK
            </a>
            <h1>
                {`Hello ${titleValue}`}
            </h1>
            <h2>
                {`Occupation: ${occupation.current}`}
            </h2>
            <h3>
                {`Residence: ${residence.current}`}
            </h3>
            <input
                className="Details__input"
                value={inputValue}
                onChange={handleButtonOnChange}
            />
            <button className="Details__button"
                title="value"
                onClick={handleTitleValue}
            >
                <text>
                    {'Press me!'}
                </text>
            </button>

        </div>
    )
}

export default Details;