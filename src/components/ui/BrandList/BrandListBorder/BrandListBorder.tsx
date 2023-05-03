import * as React from 'react'
import './brand-list-border.sass'

type AttrType = {
    type?: string
}

const BrandListBorder: React.FC<AttrType> = ({type}) => {
    let classElem = ''

    {type ?
        classElem = 'brand-list-border brand-list-border--reverse'
        :
        classElem = 'brand-list-border'
    }

    return (
        <div className={classElem}>

        </div>
    )
}

export default BrandListBorder