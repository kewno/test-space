import * as React from 'react'
import SelectElem from "../../ui/SelectElem/SelectElem";
import './language.sass'
import {Dispatch, SetStateAction} from "react";

type AttrType = {
    active: string
    setActive: Dispatch<SetStateAction<string>>
}

const Language: React.FC<AttrType> = ({active, setActive}) => {
    return (
        <div className='language'>
            <p className='language__headline'>Выберите язык:</p>
            <SelectElem id={'main'} active={active} setActive={setActive}/>
        </div>
    )
}

export default Language