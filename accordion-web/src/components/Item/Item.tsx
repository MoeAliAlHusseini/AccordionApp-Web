import React from 'react'

import './Item.css'

interface ItemProps {
    name: string,
    occupation: string,
    residence: string
}

const Item = ({ name, occupation, residence }: ItemProps) => {
    return (
        <div className='container'>
            <p>
                {`Name: ${name}`}
            </p>
            <p>
                {`Occupation: ${occupation}`}
            </p>
            <p>
                {`Residence: ${residence}`}
            </p>
        </div>
    )
}

export default Item;