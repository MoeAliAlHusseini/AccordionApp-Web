import React from 'react';

import Item from '../Item';

import './List.css';

interface ListProps {
    items: Array<any>,
    onItemPress(index: number): void
}


const List = ({ items, onItemPress }: ListProps) => {
    return (
        <div className='container'>
            {
                items.map((element, index) => {
                    return (
                        <Item key={`${element}__${index}`}
                            index={index} name={element.name}
                            occupation={element.occupation}
                            residence={element.residence}
                            onItemPress={onItemPress}
                        />
                    )
                })
            }
        </div>
    )
}

export default List;