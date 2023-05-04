import * as React from 'react'
import './footer.sass'

const Footer = () => {
    return (
        <div className='footer'>
            <nav className='footer-container'>
                <ul className='footer-list'>
                    <li className='footer-list__elem'><a className='footer-list__href' href="/">Сотрудничество</a></li>
                    <li className='footer-list__elem'><a className='footer-list__href' href="/">Доставка и возврат</a></li>
                    <li className='footer-list__elem'><a className='footer-list__href' href="/">Оплата</a></li>
                    <li className='footer-list__elem'><a className='footer-list__href' href="/">Контакты</a></li>
                    <li className='footer-list__elem'><a className='footer-list__href' href="/">Публичная оферта</a></li>
                    <li className='footer-list__elem'><a className='footer-list__href' href="/">Политика конфиденциальности</a></li>
                </ul>
            </nav>
            <p className="footer-info">
                <span className='footer-info__solid'>ООО «Хитинвест»</span> by Spaceport 2022
            </p>
        </div>
    )
}

export default Footer