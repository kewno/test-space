import * as React from 'react'
import './headline.sass'
import {ReactNode} from "react";
import {SvgIcon} from "@mui/material";
import ButtonElem from "../Button/Button";


type AttrType = {
    headline: string
    text: string
    icon: ReactNode
    coll?: number
    href?: string
    textButton?: string
}

const Headline: React.FC<AttrType> = ({href, textButton,headline, icon,text, coll = 0}) => {
    return (
        <div className='headline'>
            <h2 className="headline__headline">
                <SvgIcon className='headline__svg' viewBox="0 0 26 32">
                    {icon}
                </SvgIcon>
                {`${coll} ${headline}`}
            </h2>
            <p className="headline__text">{text}</p>
            {href ?
                <div className="headline__button">
                    <ButtonElem>{textButton}</ButtonElem>
                </div>
                :
                null
            }
        </div>
    )
}

export default Headline