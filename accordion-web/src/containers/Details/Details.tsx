import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import './Details.scss'

const Details = () => {
    const [inputValue, setInputValue] = useState('')
    const [titleValue, setTitleValue] = useState('')

    const location = useLocation();

    useEffect(() => {
        setTitleValue(location.state.id);
        setInputValue(location.state.id);
    }, [location.state.id])

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
            <h1>
                {`Hello ${titleValue}`}
            </h1>
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