import * as React from 'react'
import Image from "../../Image/Image";
import './brand.sass'
import {BrandType} from "../../../../types/types";

const Brand: React.FC<BrandType> = ({src, alt}) => {
    return (
        <div className='brand'>
            <div className='brand__image'>
                <Image src={src} alt={alt}/>
            </div>
        </div>
    )
}

export default Brand