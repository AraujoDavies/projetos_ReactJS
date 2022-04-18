import * as C from './style';
import React from 'react';
import { useState, KeyboardEvent } from 'react';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props) => {
    //State with value of input user
    const [inputText, setInputText] = useState('');

    //Function pass input user to HandleAddTask in App.tsx
    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code == 'Enter' && inputText !== '' || e.code == 'NumpadEnter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }   
    }

    return(
        <C.Container>
            <div>+</div>
            <input 
                type="text"
                placeholder='Adicione uma tarefa'
                value={inputText}
                onChange={(e)=>(setInputText(e.target.value))}
                onKeyUp={handleKeyUp}
             />
        </C.Container>
    )
}