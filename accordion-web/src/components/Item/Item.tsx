import React from 'react'

import './Item.css'

interface ItemProps {
    name: string,
    occupation: string,
    residence: string,
    style?: Object,
    className?: string
}

const style = {
    item: {
        backgroundColor: 'white',
        borderWidth: 3
    }
}

const Item = ({ name, occupation, residence }: ItemProps) => {
    return (
        <div className='container' style={style.item}>
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