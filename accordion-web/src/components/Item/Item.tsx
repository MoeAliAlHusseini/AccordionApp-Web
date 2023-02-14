import React from 'react'

import './Item.css'

interface ItemProps {
    index: number,
    name: string,
    occupation: string,
    residence: string,
    onItemPress(index: number): void,
    isOpen: boolean
}

const defaultProps: ItemProps = {
    index: 0,
    name: 'Moe',
    occupation: 'Engineer',
    residence: 'UAE',
    onItemPress: () => { },
    isOpen: false
}

const style = {
    item: {
        backgroundColor: 'white',
        borderWidth: 3
    }
}

const Item = ({ name, occupation, residence, index, onItemPress }: ItemProps) => {
    return (
        <div className='container' style={style.item} onClick={() => onItemPress(index)}>
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

Item.defaultProps = defaultProps;

export default Item;