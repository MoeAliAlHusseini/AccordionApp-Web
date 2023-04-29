import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import List from '../../components/List';
import { setList } from '../../store/reducers/listSlice';


const Home = () => {
    const navigate = useNavigate();
    const list = useSelector((state: any) => state.list.list)
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(setList(list))

        console.log("list: ", list)
    }, [dispatch, list])


    const navigateTo = (id: number) => {
        // we need to filter over the list and grab the object with the passed id
        const item = list.filter((__: any, index: number) => index === id);


        navigate("/details", {
            state: {
                id: id,
                name: item[0].name,
                occupation: item[0].occupation,
                residence: item[0].residence,
            }
        })
    }

    return (
        <div>
            <List items={list} onItemPress={navigateTo} />
        </div>
    )
}

export default Home;