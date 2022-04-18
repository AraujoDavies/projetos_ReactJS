import React from 'react';
import * as C from './style';
import { item } from '../../types/item';
import { useState } from 'react';

type props = {
    item: item
};

export const ListItem = ({item}: props) => {
    
    const [isChecked, setIsChecked] = useState(item.done);

    return(
        <C.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={ e => setIsChecked(e.target.checked)}
            />
            <label>{item.name} - {item.done.toString()}</label>
        </C.Container>
    )
}