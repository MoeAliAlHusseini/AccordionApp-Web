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

    return (
        <div>
            <List items={items} onItemPress={(id) => navigate("/details")} />
        </div>
    )
}

export default Home;