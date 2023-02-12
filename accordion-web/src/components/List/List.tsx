import React from 'react';

import Item from '../Item';

interface ListProps {
    items: Array<any>
}


const List = ({ items }: ListProps) => {
    return (
        <div>
            {
                items.map((element, index) => {
                    return (
                        <Item name={element.name} occupation={element.occupation} residence={element.residence} />
                    )
                })
            }
        </div>
    )
}

export default List;