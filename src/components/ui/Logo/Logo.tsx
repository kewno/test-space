import * as React from 'react'
import './logo.sass'

type AttrType = {

}

const Logo: React.FC<AttrType> = () => {
    return (
        <a href='/' className='logo'>Stoking</a>
    )
}

export default Logo