import * as React from 'react'
import AppBar from "../ui/AppBar/AppBar";
import BreadcrumbsElem from "../ui/BreadcrumbsElem/BreadcrumbsElem";
import Language from "./Language/Language";
import './cooperation.sass'
import {useState} from "react";
import Banner from "./Banner/Banner";
import Stages from "./Stages/Stages";
import Information from "./Information/Information";
import Brands from "./Brands/Brands";
import Products from "./Products/Products";
import Footer from "./Footer/Footer";

type AttrType = {

}

const Cooperation: React.FC<AttrType> = ({}) => {

    let [active, setActive] = useState('1')

    return (
        <div className='cooperation'>
            <div className="cooperation__app-bar">
                <AppBar/>
            </div>
            <div className="cooperation__breadcrumbs-select">
                <BreadcrumbsElem elems={[{href: '/', text: 'Сотрудничество Stoking'}]}/>
                <Language active={active} setActive={setActive}/>
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
                <Brands elems={[
                    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '1'},
                    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '2'},
                    {src: 'https://image.stoking.ru/uploads/thumbnails/150122/espa-150x150.png', alt: '3'},
                    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '4'},
                    {src: 'https://image.stoking.ru/uploads/thumbnails/149584/zetkama-150x150.png', alt: '5'},
                    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '6'},
                    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '7'},
                    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '8'},
                    {src: 'https://image.stoking.ru/uploads/thumbnails/218144/giacomoni-150x150.png', alt: '9'},
                    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '10'},
                    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '11'},
                    {src: 'https://image.stoking.ru/uploads/thumbnails/317704/thermex-150x150.png', alt: '12'},
                    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '13'},
                    {src: 'https://image.stoking.ru/uploads/thumbnails/317704/thermex-150x150.png', alt: '14'},
                    {src: 'https://image.stoking.ru/uploads/thumbnails/218144/giacomoni-150x150.png', alt: '15'},
                ]}/>
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