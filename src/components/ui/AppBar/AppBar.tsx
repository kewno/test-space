import * as React from 'react'
import './app-bar.sass'
import Logo from "../Logo/Logo";
import ButtonElem from "../Button/Button";
import MenuIcon from '@mui/icons-material/Menu';
import InputElem from "../InputElem/InputElem";
import {useState} from "react";
import AppBarNavigation from "./AppBarNavigation/AppBarNavigation";
import IconButton from "@mui/material/IconButton";

type AttrType = {

}



const AppBar: React.FC<AttrType> = ({}) => {

    let [value, setValue] = useState('')

    let handleOpenBurger = () => {

    }

    return (
        <div className='app-bar'>
            <div className="app-bar__logo">
                <Logo/>
            </div>
            <div className="app-bar__button">
                <ButtonElem startIcon={<MenuIcon />}>Каталог</ButtonElem>
            </div>
            <div className="app-bar__input">
                <InputElem id='app-bar-input' value={value} label='Поиск по товарам' onChange={setValue}/>
            </div>
            <div className="app-bar__navigation">
                <AppBarNavigation/>
            </div>

            <div className="app-bar__burger" onClick={handleOpenBurger}>
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default AppBar