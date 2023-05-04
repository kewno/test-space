import * as React from 'react'
import './menu.sass'
import IconButton from "@mui/material/IconButton";
import {SvgIcon} from "@mui/material";

type AttrType = {

}

const Menu: React.FC<AttrType> = ({}) => {

    return (
        <div className='menu'>
            <div className='menu__elem'>
                <IconButton>
                    <SvgIcon className='menu__svg'>
                        <path d="M10.3978 1.89482L1.5527 8.50535C1.0475 8.88292 0.75 9.47667 0.75 10.1074V21C0.75 22.1046 1.64543 23 2.75 23H5.98005C7.08462 23 7.98005 22.1046 7.98005 21V14.5789C7.98005 13.4744 8.87548 12.5789 9.98005 12.5789H13.2101C14.3147 12.5789 15.2101 13.4744 15.2101 14.5789V21C15.2101 22.1046 16.1055 23 17.2101 23H20.4401C21.5447 23 22.4401 22.1046 22.4401 21V10.1074C22.4401 9.47667 22.1426 8.88292 21.6374 8.50535L12.7924 1.89482C12.0824 1.36419 11.1078 1.36419 10.3978 1.89482Z" stroke="#3A3A3A"/>
                    </SvgIcon>
                </IconButton>
                <p className='menu__text'>Главная</p>
            </div>
            <div className='menu__elem'>
                <IconButton>
                    <SvgIcon className='menu__svg'>
                        <g clip-path="url(#clip0_2_1837)">
                            <path d="M23.5 4.5H0.500016C0.224016 4.5 0 4.76881 0 5.1C0 5.43119 0.224016 5.7 0.500016 5.7H23.5C23.776 5.7 24 5.43119 24 5.1C24 4.76881 23.776 4.5 23.5 4.5Z" fill="#3A3A3A"/>
                            <path d="M11.75 11.5H0.250007C0.112008 11.5 0 11.7688 0 12.1C0 12.4312 0.112008 12.7 0.250007 12.7H11.75C11.888 12.7 12 12.4312 12 12.1C12 11.7688 11.888 11.5 11.75 11.5Z" fill="#3A3A3A"/>
                            <path d="M12.925 18.5H0.275008C0.123208 18.5 0 18.7688 0 19.1C0 19.4312 0.123208 19.7 0.275008 19.7H12.925C13.0768 19.7 13.2 19.4312 13.2 19.1C13.2 18.7688 13.0768 18.5 12.925 18.5Z" fill="#3A3A3A"/>
                            <path d="M18.9 14.3789L22.1409 18.9596M20.2706 12.2441C19.9531 14.0443 18.222 15.2437 16.404 14.9231C14.586 14.6025 13.3696 12.8832 13.6871 11.0831C14.0046 9.28292 15.7357 8.08352 17.5537 8.40414C19.3716 8.72476 20.588 10.444 20.2706 12.2441Z" stroke="#3A3A3A" stroke-linecap="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2_1837">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </SvgIcon>
                </IconButton>
                <p className='menu__text'>Каталог</p>
            </div>
            <div className='menu__elem'>
                <IconButton>
                    <SvgIcon className='menu__svg'>
                        <path d="M8.95867 19.1426C7.57487 19.1426 6.45312 20.2952 6.45312 21.7171C6.45312 23.139 7.57492 24.2916 8.95867 24.2916C10.3425 24.2916 11.4642 23.1389 11.4642 21.7171C11.4643 20.2952 10.3425 19.1426 8.95867 19.1426ZM8.95867 23.1474C8.1899 23.1474 7.56671 22.5071 7.56671 21.7171C7.56671 20.9272 8.1899 20.2869 8.95867 20.2869C9.72744 20.2869 10.3506 20.9272 10.3506 21.7171C10.3507 22.5071 9.72744 23.1474 8.95867 23.1474Z" fill="#3A3A3A"/>
                        <path d="M19.5368 19.1426C18.153 19.1426 17.0312 20.2952 17.0312 21.7171C17.0312 23.139 18.153 24.2916 19.5368 24.2916C20.9206 24.2916 22.0423 23.1389 22.0423 21.7171C22.0423 20.2952 20.9206 19.1426 19.5368 19.1426ZM19.5368 23.1474C18.768 23.1474 18.1448 22.5071 18.1448 21.7171C18.1448 20.9272 18.768 20.2869 19.5368 20.2869C20.3056 20.2869 20.9288 20.9272 20.9288 21.7171C20.9288 22.5071 20.3056 23.1474 19.5368 23.1474Z" fill="#3A3A3A"/>
                        <path d="M25.1911 4.12423C25.0752 3.99408 24.9166 3.91261 24.7457 3.89536L6.62208 3.63791L6.12097 2.06458C5.76795 1.01283 4.80942 0.302788 3.72674 0.291016H1.86148C1.55396 0.291016 1.30469 0.547151 1.30469 0.863132C1.30469 1.17911 1.55396 1.43525 1.86148 1.43525H3.72674C4.33213 1.44899 4.86521 1.84842 5.06307 2.43647L8.59871 13.3925L8.32034 14.0504C8.00983 14.8731 8.10309 15.7991 8.57089 16.5391C9.03422 17.2659 9.8137 17.7144 10.6589 17.7405H21.4886C21.7961 17.7405 22.0453 17.4844 22.0453 17.1684C22.0453 16.8524 21.7961 16.5963 21.4886 16.5963H10.6588C10.1815 16.584 9.74219 16.326 9.48956 15.9098C9.23975 15.4986 9.18844 14.992 9.35038 14.5367L9.57311 14.0218L21.2936 12.7631C22.581 12.6174 23.6401 11.6553 23.9384 10.3602L25.2747 4.61044C25.335 4.44487 25.303 4.25865 25.1911 4.12423ZM22.8526 10.1028C22.6719 10.9365 21.9831 11.5514 21.1544 11.6189L9.57311 12.8489L6.98401 4.78215L24.0497 5.0396L22.8526 10.1028Z" fill="#3A3A3A"/>
                    </SvgIcon>
                </IconButton>
                <p className='menu__text'>Корзина</p>
            </div>
            <div className='menu__elem'>
                <IconButton>
                    <SvgIcon className='menu__svg'>
                        <path d="M19.8321 2.60987C19.3285 2.09888 18.7306 1.69352 18.0726 1.41696C17.4145 1.14039 16.7092 0.998047 15.9969 0.998047C15.2846 0.998047 14.5792 1.14039 13.9212 1.41696C13.2631 1.69352 12.6652 2.09888 12.1617 2.60987L11.1166 3.66987L10.0715 2.60987C9.05436 1.57818 7.67479 0.998582 6.23631 0.998582C4.79782 0.998582 3.41826 1.57818 2.4011 2.60987C1.38394 3.64157 0.8125 5.04084 0.8125 6.49987C0.8125 7.95891 1.38394 9.35818 2.4011 10.3899L3.44617 11.4499L11.1166 19.2299L18.787 11.4499L19.8321 10.3899C20.3359 9.87912 20.7355 9.27269 21.0082 8.60523C21.2809 7.93777 21.4212 7.22236 21.4212 6.49987C21.4212 5.77739 21.2809 5.06198 21.0082 4.39452C20.7355 3.72706 20.3359 3.12063 19.8321 2.60987V2.60987Z" stroke="#3A3A3A" stroke-linecap="round" stroke-linejoin="round"/>
                    </SvgIcon>
                </IconButton>
                <p className='menu__text'>Избранное</p>
            </div>
            <div className='menu__elem'>
                <IconButton>
                    <SvgIcon className='menu__svg'>
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#3A3A3A" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4 21H20" stroke="#3A3A3A"/>
                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#3A3A3A" stroke-linecap="round" stroke-linejoin="round"/>
                    </SvgIcon>
                </IconButton>
                <p className='menu__text'>Профиль</p>
            </div>
        </div>
    )
}

export default Menu