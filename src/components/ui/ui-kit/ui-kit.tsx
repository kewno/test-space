import * as React from 'react'
import './ui-kit.sass'
import ButtonElem from "../Button/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import {Grid} from "@mui/material";
import SelectElem from "../SelectElem/SelectElem";
import {useState} from "react";
import Image from "../Image/Image";
import Brand from "../BrandList/Brand/Brand";
import BrandList from "../BrandList/BrandList";
import Product from "../ProductList/Product/Product";
import ProductList from "../ProductList/ProductList";
import AppBar from "../AppBar/AppBar";
import BreadcrumbsElem from "../BreadcrumbsElem/BreadcrumbsElem";
import Headline from "../Headline/Headline";
import Footer from "../../Cooperation/Footer/Footer";

type AttrType = {

}

const UiKit: React.FC<AttrType> = ({}) => {

    let [selectActive, setSelectActive] = useState('')

    return (
        <div>
            <Headline
                headline='Бренд'
                text='Официальный дилер мировых брендов-производителей.'
                icon={<path d="M21 8.64706L11 3L6 5.82353M21 8.64706V21.3529L11 27M21 8.64706L16 11.4706M11 27V14.2941M11 27L1 21.3529V8.64706M11 14.2941L1 8.64706M11 14.2941L16 11.4706M1 8.64706L6 5.82353M6 5.82353L16 11.4706M16 11.4706V15" stroke="#ED7117" stroke-linecap="round" stroke-linejoin="round"/>}
            />
            <BreadcrumbsElem elems={[{href: '/', text: 'Сотрудничество Stoking'}]}/>
            <AppBar/>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ButtonElem>Текст</ButtonElem>
                </Grid>
                <Grid item xs={4}>
                    <ButtonElem disabled={true}>Заблокированна</ButtonElem>
                </Grid>
                <Grid item xs={4}>
                    <ButtonElem href={'/'}>Ссылка</ButtonElem>
                </Grid>
                <Grid item xs={1}>
                    <ButtonElem href={'/'} startIcon={<DeleteIcon />}>Иконка</ButtonElem>
                </Grid>
                <Grid item xs={3}>
                    {/*<SelectElem*/}
                    {/*    id={'select--ui-kit'}*/}
                    {/*    elems={[{value: 1, text: 'first'}]}*/}
                    {/*    active={selectActive}*/}
                    {/*    setActive={setSelectActive}*/}
                    {/*/>*/}
                </Grid>
                <Grid item xs={3}>
                    <Image alt={'no-found'}/>
                </Grid>
                {/*<Grid item xs={3}>*/}
                {/*    <Image src={'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png'} alt={'found'}/>*/}
                {/*</Grid>*/}
                <Grid item xs={3}>
                    <Brand src={'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png'} alt={'found'}/>
                </Grid>
                {/*<BrandList elems={[*/}
                {/*    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '1'},*/}
                {/*    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '2'},*/}
                {/*    {src: 'https://image.stoking.ru/uploads/thumbnails/150122/espa-150x150.png', alt: '3'},*/}
                {/*    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '4'},*/}
                {/*    {src: 'https://image.stoking.ru/uploads/thumbnails/149584/zetkama-150x150.png', alt: '5'},*/}
                {/*    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '6'},*/}
                {/*    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '7'},*/}
                {/*    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '8'},*/}
                {/*    {src: 'https://image.stoking.ru/uploads/thumbnails/218144/giacomoni-150x150.png', alt: '9'},*/}
                {/*    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '10'},*/}
                {/*    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '11'},*/}
                {/*    {src: 'https://image.stoking.ru/uploads/thumbnails/317704/thermex-150x150.png', alt: '12'},*/}
                {/*    {src: 'https://image.stoking.ru/uploads/thumbnails/179040/navien-150x150.png', alt: '13'},*/}
                {/*    {src: 'https://image.stoking.ru/uploads/thumbnails/317704/thermex-150x150.png', alt: '14'},*/}
                {/*    {src: 'https://image.stoking.ru/uploads/thumbnails/218144/giacomoni-150x150.png', alt: '15'},*/}
                {/*]}/>*/}

            </Grid>
            <div className='ui-kit__product'>
                <Product
                    alt={'image'}
                    name={'S21A Пластина AiSi 316 0,5 mm TK 1234'}
                    src={'https://image.stoking.ru/uploads/thumbnails/276973/f642d375a5970d68b9d85ee128c6b591s800x0-1-150x150.jpg'}
                    price={'1875'}
                    article={'S21A ПЛАСТИНА'}
                />

            </div>
            <ProductList elems={[
                {alt: 'image', name: 'S21A Пластина AiSi 316 0,5 mm TK 1234', price: '1875', article: 'S21A ПЛАСТИНА'},
                {alt: 'image', name: 'S21A Пластина AiSi 316 0,5 mm TK 1234', price: '1875', article: 'S21A ПЛАСТИНА', src: 'https://image.stoking.ru/uploads/thumbnails/218933/fitingi-150x150.png'},
                {alt: 'image', name: 'S21A Пластина AiSi 316 0,5 mm TK 1234', price: '1875', article: 'S21A ПЛАСТИНА', src: 'https://image.stoking.ru/uploads/thumbnails/276973/f642d375a5970d68b9d85ee128c6b591s800x0-1-150x150.jpg'},
                {alt: 'image', name: 'S21A Пластина AiSi 316 0,5 mm TK 1234', price: '1875', article: 'S21A ПЛАСТИНА', src: 'https://image.stoking.ru/uploads/thumbnails/218933/fitingi-150x150.png'},
                {alt: 'image', name: 'S21A Пластина AiSi 316 0,5 mm TK 1234', price: '1875', article: 'S21A ПЛАСТИНА', src: 'https://image.stoking.ru/uploads/thumbnails/276973/f642d375a5970d68b9d85ee128c6b591s800x0-1-150x150.jpg'},
            ]}
                // alt={'image'}
                // name={'S21A Пластина AiSi 316 0,5 mm TK 1234'}
                // src={'https://image.stoking.ru/uploads/thumbnails/276973/f642d375a5970d68b9d85ee128c6b591s800x0-1-150x150.jpg'}
                // price={'1875'}
                // article={'S21A ПЛАСТИНА'}
            />

        </div>
    )
}

export default UiKit