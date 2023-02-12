import React from 'react';

import Item from '../Item';

import './List.css';

interface ListProps {
    items: Array<any>
}


const List = ({ items }: ListProps) => {
    return (
        <div className='container'>
            {
                items.map((element, index) => {
                    return (
                        <Item key={`${element}__${index}`} name={element.name} occupation={element.occupation} residence={element.residence} />
                    )
                })
            }
        </div>
    )
}

export default List;