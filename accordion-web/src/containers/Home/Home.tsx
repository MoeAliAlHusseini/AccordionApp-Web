import React from 'react';
import { useNavigate } from "react-router-dom";

import List from '../../components/List';

const items = [
    {
        name: 'Moe',
        occupation: 'Software Engineer',
        residence: 'UAE'
    },
    {
        name: 'Ahmad',
        occupation: 'SDET',
        residence: 'UAE'
    },
    {
        name: 'Rami',
        occupation: 'Product Owner',
        residence: 'UAE'
    }
]


const Home = () => {
    const navigate = useNavigate();

    const navigateTo = (id: number) => {
        navigate("/details", {
            state: {
                id: id,
            }
        })
    }

    return (
        <div>
            <List items={items} onItemPress={navigateTo} />
        </div>
    )
}

export default Home;