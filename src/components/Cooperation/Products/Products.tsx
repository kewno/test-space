import * as React from 'react'
import './products.sass'
import ProductList from "../../ui/ProductList/ProductList";
import {ProductType} from "../../../types/types";
import Headline from "../../ui/Headline/Headline";

type AttrType = {
    elems: ProductType[]
}

const Products: React.FC<AttrType> = ({elems}) => {
    return (
        <div className='products'>
            <div className="products__headline">
                <Headline
                    headline='товаров'
                    text=' На нашем сайте, в наличии с актуальными ценами.'
                    icon={<path d="M21 8.64706L11 3L6 5.82353M21 8.64706V21.3529L11 27M21 8.64706L16 11.4706M11 27V14.2941M11 27L1 21.3529V8.64706M11 14.2941L1 8.64706M11 14.2941L16 11.4706M1 8.64706L6 5.82353M6 5.82353L16 11.4706M16 11.4706V15" stroke="#ED7117" strokeLinecap="round" strokeLinejoin="round"/>
                    }
                />
            </div>
            <div className="products__list">
                <ProductList elems={elems}/>
            </div>
        </div>
    )
}

export default Products