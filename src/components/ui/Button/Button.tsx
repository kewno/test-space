import * as React from 'react'
import Button from '@mui/material/Button';
import './button.sass'

type AttrType = {
    id?: string
    disabled?: boolean
    href?: string
    children?: React.ReactNode
    variant?: string
    startIcon?: React.ReactNode
    func?: () => void
}

const ButtonElem: React.FC<AttrType> = ({id,startIcon, href, children, disabled, func}) => {

    let handleClick = () => {
        if (func) func()
    }

    return (
        <Button
            className="button-elem"
            id={id}
            href={href}
            onClick={() => handleClick()}
            disabled={disabled}
            variant='contained'
            startIcon={startIcon}
            fullWidth={true}
        >{children}</Button>
    )
}

export default ButtonElem