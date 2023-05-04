import * as React from 'react'
import './product-list.sass'
import {ProductType} from "../../../types/types";
import Product from "./Product/Product";

type AttrType = {
    elems: ProductType[]
}

const ProductList: React.FC<AttrType> = ({elems}) => {


    return (
        <div className='product-list'>
            {elems.map(el => {
                return <div key={el.id} className='product-list__elem'>
                    <Product
                        id={el.id}
                        alt={el.alt}
                        name={el.name}
                        src={el.src}
                        price={el.price}
                        article={el.article}
                    />
                </div>
            })}
        </div>
    )
}

export default ProductList