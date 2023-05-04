import * as React from 'react'
import './input-elem.sass'
import TextField from '@mui/material/TextField';
import {Dispatch, SetStateAction} from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from '@mui/material/InputAdornment';

type AttrType = {
    id: string
    label: string
    value: string
    onChange: Dispatch<SetStateAction<string>>
    func?: () => void
}

const InputElem: React.FC<AttrType> = ({id, label, value, onChange, func}) => {

    let handleText = (e: React.FocusEvent<HTMLInputElement>): void => {
        onChange(e.currentTarget.value);
    }

    let handleClick = () => {
        if (func) func()
    }

    return (
        <TextField
            id={id}
            label={label}
            onChange={handleText}
            variant="outlined"
            fullWidth={true}
            value={value}
            size="small"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton>
                            <SearchIcon
                                onClick={handleClick}
                            />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}


export default InputElem