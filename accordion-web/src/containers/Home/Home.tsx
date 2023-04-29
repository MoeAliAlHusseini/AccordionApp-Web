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
        // we need to filter over the list and grab the object with the passed id
        const item = items.filter((__, index) => index === id);

        console.log("item: ", item)

        navigate("/details", {
            state: {
                name: item[0].name,
                occupation: item[0].occupation,
                residence: item[0].residence,
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