import * as React from 'react'
import SelectElem from "../../ui/SelectElem/SelectElem";
import './language.sass'
import {Dispatch, SetStateAction} from "react";

type AttrType = {
    id: string
    active: string
    setActive: (event: string) => void//Dispatch<SetStateAction<string>>
}

const Language: React.FC<AttrType> = ({id,active, setActive}) => {
    return (
        <div className='language'>
            <p className='language__headline'>Выберите язык:</p>
            <SelectElem id={id} active={active} setActive={setActive}/>
        </div>
    )
}

export default Language