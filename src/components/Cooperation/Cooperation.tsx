import * as React from 'react'
import AppBar from "../ui/AppBar/AppBar";
import BreadcrumbsElem from "../ui/BreadcrumbsElem/BreadcrumbsElem";
import Language from "./Language/Language";
import './cooperation.sass'
import {useEffect, useState} from "react";
import Banner from "./Banner/Banner";
import Stages from "./Stages/Stages";
import Information from "./Information/Information";
import Brands from "./Brands/Brands";
import Products from "./Products/Products";
import Footer from "./Footer/Footer";
import {setDataBrandsThunkCreator} from "../../redux/brandsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../../redux/store";
import {actions} from "../../redux/languageReducer";

type AttrType = {

}

const Cooperation: React.FC<AttrType> = ({}) => {

    let dispatch: AppDispatch = useDispatch()

    let language = useSelector((state: AppStateType) => state.language.language) //setLanguage

    let handleChangeLanguage = (event: string) => {
        dispatch(actions.setLanguage(event))
    }

    let dataBrends = useSelector( (state: AppStateType) => state.brands.brands)
    let countBrends = useSelector((state: AppStateType) => state.brands.meta.totalCount)

    useEffect(() => {
        dispatch(setDataBrandsThunkCreator())
        dispatch(actions.getLanguage())
    }, []);

    return (
        <div className='cooperation'>
            <div className="cooperation__app-bar">
                <AppBar/>
            </div>
            <div className="cooperation__breadcrumbs-select">
                <BreadcrumbsElem elems={[{href: '/', text: 'Сотрудничество Stoking'}]}/>
                <Language id={'main'} active={language} setActive={handleChangeLanguage}/>
            </div>
            <div className="cooperation__banner">
                <Banner/>
            </div>
            <div className="cooperation__stages">
                <Stages/>
            </div>
            <div className="cooperation__information">
                <Information/>
            </div>
            <div className="cooperation__brands">
                <Brands elems={dataBrends} count={countBrends}/>
            </div>
            <div className="cooperation__products">
                <Products elems={[
                    {alt: 'image', name: 'S21A Пластина AiSi 316 0,5 mm TK 1234', price: '1875', article: 'S21A ПЛАСТИНА'},
                    {alt: 'image', name: 'S21A Пластина AiSi 316 0,5 mm TK 1234', price: '1875', article: 'S21A ПЛАСТИНА', src: 'https://image.stoking.ru/uploads/thumbnails/218933/fitingi-150x150.png'},
                    {alt: 'image', name: 'S21A Пластина AiSi 316 0,5 mm TK 1234', price: '1875', article: 'S21A ПЛАСТИНА', src: 'https://image.stoking.ru/uploads/thumbnails/276973/f642d375a5970d68b9d85ee128c6b591s800x0-1-150x150.jpg'},
                    {alt: 'image', name: 'S21A Пластина AiSi 316 0,5 mm TK 1234', price: '1875', article: 'S21A ПЛАСТИНА', src: 'https://image.stoking.ru/uploads/thumbnails/218933/fitingi-150x150.png'},
                    {alt: 'image', name: 'S21A Пластина AiSi 316 0,5 mm TK 1234', price: '1875', article: 'S21A ПЛАСТИНА', src: 'https://image.stoking.ru/uploads/thumbnails/276973/f642d375a5970d68b9d85ee128c6b591s800x0-1-150x150.jpg'},
                ]}/>
            </div>
            <div className="cooperation__footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Cooperation