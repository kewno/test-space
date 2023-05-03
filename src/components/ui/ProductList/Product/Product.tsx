import * as React from 'react'
import Image from "../../Image/Image";
import './product.sass'
import {ProductType} from "../../../../types/types";

// type AttrType = {
//     src?: string
//     alt: string
//     name: string
//     price: string
//     article: string
// }

const Product: React.FC<ProductType> = ({src, alt, name, price, article}) => {


    let paddingPrice = (price: string) => {
        let priceLength = price.length
        let end = price.substr(-3, 3)
        let startLength = priceLength - 3;
        let start = price.substr(0, startLength)
        return `${start} ${end}`
    }

    let priceWithIcon = `${paddingPrice(price)} ₽`

    return (
        <div className='product'>
            <div className="product__image">
                <Image src={src} alt={alt}/>
            </div>
            <div className='product-body'>
                <h3 className='product-body__name'>{name}</h3>
                <p className='product-body__article'>
                    <span>Артикул: </span>
                    {article}</p>
                <p className='product-body__price'>{priceWithIcon}</p>
            </div>
        </div>
    )
}

export default Product