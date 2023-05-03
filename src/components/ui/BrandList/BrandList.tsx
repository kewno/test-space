import * as React from 'react'
import './brand-list.sass'
import Brand from "./Brand/Brand";
import {DataBrendsItem} from "../../../types/types";
import {Grid} from "@mui/material";
import BrandListBorder from "./BrandListBorder/BrandListBorder";

type AttrType = {
    elems: DataBrendsItem[]
}

const BrandList: React.FC<AttrType> = ({elems}) => {
    return (
        <div className='brand-list'>
            <BrandListBorder/>
            <Grid className='brand-list__elems' container spacing={2}>
                {elems.map(el => {
                    return <Grid key={el.id} item xs={4}>
                        <Brand src={el.thumbnail.sizes[0].path} alt={el.name}/>
                    </Grid>
                })}
            </Grid>
            <BrandListBorder type={'reverse'}/>
        </div>
        // <div className='brand-list'>
        //     {elems.map(el => {
        //         return <Brand src={el.src} alt={el.alt}/>
        //     })}
        // </div>
    )
}

export default BrandList