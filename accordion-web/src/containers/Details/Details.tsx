import React, { useState, useEffect, useCallback, useMemo } from "react";

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
    const [userInfo, setUserInfo] = useState({
        title: '',
        occupation: '',
        residence: ''
    })

    const location = useLocation();

    useEffect(() => {
        setUserInfo({
            title: location.state.name,
            occupation: location.state.occupation,
            residence: location.state.residence
        });
        setInputValue(location.state.name);


    }, [location.state])

    const renderTitle = useMemo(() => {
        return `Hello ${userInfo.title}`;
    }, [userInfo.title])

    const renderOccupation = useMemo(() => {
        return `Occupation: ${userInfo.occupation}`
    }, [userInfo.occupation])

    const renderResidence = useMemo(() => {
        return `Residence: ${userInfo.residence}`
    }, [userInfo.residence])

    const handleTitleValue = useCallback((e: any) => {
        const target = e.target;
        const value = target.value;

        setInputValue(value);
    }, [])

    const handleButtonOnChange = () => {
        const id = location.state.id
        setUserInfo({
            ...userInfo,
            title: inputValue
        });

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
                {renderTitle}
            </h1>
            <h2>
                {renderOccupation}
            </h2>
            <h3>
                {renderResidence}
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