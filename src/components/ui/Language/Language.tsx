import * as React from 'react'

type AttrType = {

}

const Language: React.FC<AttrType> = () => {
    return (
        <div className='language'>
           <p className='language__headline'>Выберите язык:</p>
        </div>
    )
}

export default Language