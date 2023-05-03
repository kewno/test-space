import * as React from 'react'
import Select from '@mui/material/Select';
import {MenuItem} from "@mui/material";
import {SelectType} from "../../../types/types";
import './select-elem.sass'

type AttrType = {
    id: string
    disabled?: boolean
    elems?: Array<SelectType>
    active: any
    setActive: any
}

const SelectElem: React.FC<AttrType> = ({id, active, setActive, elems, disabled}) => {

    let handleChange = (event: string) => {
        let a = event
        setActive(event)
    }
    return (
        <Select
            className={'select'}
            id={id}
            disabled={disabled}
            fullWidth={true}
            onChange={event => handleChange(event.target.value)}
            value={active}
            size="small"
        >
            <MenuItem value={1}>
                <img className={'select__img'} src={require('../../../image/rus.png')} alt={'flag'}/>
                Русский
            </MenuItem>
            <MenuItem value={2}>
                <img className={'select__img'} src={require('../../../image/usa.png')} alt={'flag'}/>
                Английский
            </MenuItem>
            <MenuItem value={3}>
                <img className={'select__img'} src={require('../../../image/turce.png')} alt={'flag'}/>
                Турецкий
            </MenuItem>
            {/*{elems?.map(el => {*/}
            {/*    return <MenuItem value={el.value}>*/}
            {/*        <DeleteIcon/>*/}
            {/*        {el.text}*/}
            {/*    </MenuItem>*/}
            {/*})}*/}
        </Select>
    )
}

export default SelectElem