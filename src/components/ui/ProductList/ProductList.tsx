import * as React from 'react'
import './product-list.sass'
import {ProductType} from "../../../types/types";
import Product from "./Product/Product";
import {Grid} from "@mui/material";

type AttrType = {
    elems: ProductType[]
}

const ProductList: React.FC<AttrType> = ({elems}) => {


    return (
        <div className='product-list'>
            {elems.map(el => {
                return <div className='product-list__elem'>
                    <Product
                        alt={el.alt}
                        name={el.name}
                        src={el.src}
                        price={el.price}
                        article={el.article}
                    />
                </div>
            })}
        </div>
    // <Grid container>
    //     {elems.map(el => {
    //         return <Grid item >
    //             <Product
    //             alt={el.alt}
    //             name={el.name}
    //             src={el.src}
    //             price={el.price}
    //             article={el.article}
    //         />
    //         </Grid>
    //     })}
    //
    // </Grid>
    )
}

export default ProductList