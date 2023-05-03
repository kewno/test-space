import * as React from 'react'
import './image.sass'

type AttrType = {
    src?: string
    alt?: string
}

const Image: React.FC<AttrType> = ({src, alt}) => {
    return (
        <div className={'image'}>
            {src ?
                <img className={'image__elem'} src={src} alt={alt}/>
                :
                <img className={'image__elem image__elem--null'} src={require('../../../image/Image-not-found.png')} alt={alt}/>
            }
        </div>
    )
}

export default Image