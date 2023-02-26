import React from 'react';

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
    return (
        <div>
            <List items={items} onItemPress={(id) => console.log("id: ", id)} />
        </div>
    )
}

export default Home;