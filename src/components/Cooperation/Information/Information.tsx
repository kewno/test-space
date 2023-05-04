import * as React from 'react'
import './information.sass'


const Information = () => {

    return (
        <div className='information-container'>
            <div className='information'>
                <p className='information__text'>
                    <span className='information__text--bold'>Stoking</span> — маркетплейс инженерно-промышленного оборудования.
                    Рынок промышленного оборудования изменяется. Появляются новые, качественные бренды, формируются больше склады, меняется политика компаний, ускоряются процессы логистики оборудования.

                    Стокинг это более 50 инженеров, создавших сервис-проводник в сегменте промышленного оборудования.

                    Мы хотим знать что вы производите, продаете и донести это миру.
                </p>
                <img className='information__image' src={require('./../../../image/smartphone.png')} alt='smartphone'/>
            </div>
        </div>
    )
}

export default Information