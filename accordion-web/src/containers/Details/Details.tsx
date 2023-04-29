import React, { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

import './Details.scss'
import { setList } from "../../store/reducers/listSlice";

const Details = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const list = useSelector((state: any) => state.list.list)
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

    const handleTitleValue = (e: any) => {
        const target = e.target;
        const value = target.value;

        setInputValue(value);
    }

    const handleButtonOnChange = () => {
        const id = location.state.id
        setTitleValue(inputValue)

        const updatedList = list.map((item: any, index: any) => {
            if (index === id) {
                return {
                    ...item,
                    name: inputValue
                }
            }
            else {
                return item;
            }
        })
        dispatch(setList(updatedList))
    }

    const handleButtonOnBack = () => {
        navigate("/", {
            state: {
                list: list
            }
        })
    }


    return (
        <div className="Details">
            <button className="Details__backButton" onClick={handleButtonOnBack}>
                <text>
                    BACK
                </text>
            </button>
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
                onChange={handleTitleValue}
            />
            <button className="Details__button"
                title="value"
                onClick={handleButtonOnChange}
            >
                <text>
                    {'Press me!'}
                </text>
            </button>

        </div>
    )
}

export default Details;