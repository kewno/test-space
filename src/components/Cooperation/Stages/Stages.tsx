import * as React from 'react'
import './stages.sass'
import {SvgIcon} from "@mui/material";

type AttrType = {

}

const Stages: React.FC<AttrType> = ({}) => {
    return (
        <div className='stages'>
            <h2 className='stages__headline'>Этапы работы</h2>
            <div className='stages-elems'>
                <div className='stages-elem'>
                    <SvgIcon className='stages-elem__svg' viewBox="0 0 73 72">
                        <circle cx="36.5" cy="35.8105" r="26.5" fill="#FEDEC7" stroke="#ED7117" stroke-width="4"/>
                        <path d="M19.74 39.3105C19.476 39.3105 19.272 39.2425 19.128 39.1065C18.992 38.9625 18.924 38.7585 18.924 38.4945V31.5465C18.924 31.2905 18.988 31.0945 19.116 30.9585C19.252 30.8225 19.44 30.7545 19.68 30.7545C19.928 30.7545 20.116 30.8225 20.244 30.9585C20.372 31.0945 20.436 31.2905 20.436 31.5465V38.0265H23.664V31.5465C23.664 31.2905 23.728 31.0945 23.856 30.9585C23.992 30.8225 24.18 30.7545 24.42 30.7545C24.668 30.7545 24.856 30.8225 24.984 30.9585C25.112 31.0945 25.176 31.2905 25.176 31.5465V38.0265H28.404V31.5465C28.404 31.2905 28.468 31.0945 28.596 30.9585C28.732 30.8225 28.92 30.7545 29.16 30.7545C29.408 30.7545 29.596 30.8225 29.724 30.9585C29.852 31.0945 29.916 31.2905 29.916 31.5465V38.4945C29.916 38.7585 29.844 38.9625 29.7 39.1065C29.564 39.2425 29.364 39.3105 29.1 39.3105H19.74ZM33.6398 39.4305C33.2158 39.4305 32.8358 39.3505 32.4998 39.1905C32.1718 39.0225 31.9118 38.7985 31.7198 38.5185C31.5358 38.2385 31.4438 37.9225 31.4438 37.5705C31.4438 37.1385 31.5558 36.7985 31.7798 36.5505C32.0038 36.2945 32.3678 36.1105 32.8718 35.9985C33.3758 35.8865 34.0518 35.8305 34.8998 35.8305H35.4998V36.6945H34.9118C34.4158 36.6945 34.0198 36.7185 33.7238 36.7665C33.4278 36.8145 33.2158 36.8985 33.0878 37.0185C32.9678 37.1305 32.9078 37.2905 32.9078 37.4985C32.9078 37.7625 32.9998 37.9785 33.1838 38.1465C33.3678 38.3145 33.6238 38.3985 33.9518 38.3985C34.2158 38.3985 34.4478 38.3385 34.6478 38.2185C34.8558 38.0905 35.0198 37.9185 35.1398 37.7025C35.2598 37.4865 35.3198 37.2385 35.3198 36.9585V35.5785C35.3198 35.1785 35.2318 34.8905 35.0558 34.7145C34.8798 34.5385 34.5838 34.4505 34.1678 34.4505C33.9358 34.4505 33.6838 34.4785 33.4118 34.5345C33.1478 34.5905 32.8678 34.6865 32.5718 34.8225C32.4198 34.8945 32.2838 34.9145 32.1638 34.8825C32.0518 34.8505 31.9638 34.7865 31.8998 34.6905C31.8358 34.5865 31.8038 34.4745 31.8038 34.3545C31.8038 34.2345 31.8358 34.1185 31.8998 34.0065C31.9638 33.8865 32.0718 33.7985 32.2238 33.7425C32.5918 33.5905 32.9438 33.4825 33.2798 33.4185C33.6238 33.3545 33.9358 33.3225 34.2158 33.3225C34.7918 33.3225 35.2638 33.4105 35.6318 33.5865C36.0078 33.7625 36.2878 34.0305 36.4718 34.3905C36.6558 34.7425 36.7478 35.1985 36.7478 35.7585V38.6385C36.7478 38.8865 36.6878 39.0785 36.5678 39.2145C36.4478 39.3425 36.2758 39.4065 36.0518 39.4065C35.8278 39.4065 35.6518 39.3425 35.5238 39.2145C35.4038 39.0785 35.3438 38.8865 35.3438 38.6385V38.0625H35.4398C35.3838 38.3425 35.2718 38.5865 35.1038 38.7945C34.9438 38.9945 34.7398 39.1505 34.4918 39.2625C34.2438 39.3745 33.9598 39.4305 33.6398 39.4305ZM39.1783 39.4065C38.9383 39.4065 38.7503 39.3385 38.6143 39.2025C38.4863 39.0665 38.4223 38.8745 38.4223 38.6265V34.2825C38.4223 34.0105 38.4943 33.8025 38.6383 33.6585C38.7823 33.5145 38.9903 33.4425 39.2623 33.4425H42.3223C42.5383 33.4425 42.6983 33.4905 42.8023 33.5865C42.9063 33.6825 42.9583 33.8305 42.9583 34.0305C42.9583 34.2225 42.9063 34.3705 42.8023 34.4745C42.6983 34.5705 42.5383 34.6185 42.3223 34.6185H39.9223V38.6265C39.9223 39.1465 39.6743 39.4065 39.1783 39.4065ZM48.1845 39.3105C47.9765 39.3105 47.8125 39.2545 47.6925 39.1425C47.5805 39.0225 47.5245 38.8625 47.5245 38.6625C47.5245 38.4545 47.5805 38.2985 47.6925 38.1945C47.8125 38.0905 47.9765 38.0385 48.1845 38.0385H49.5285V32.1465H50.2725L48.5085 33.2145C48.3565 33.3025 48.2125 33.3385 48.0765 33.3225C47.9485 33.2985 47.8365 33.2425 47.7405 33.1545C47.6525 33.0585 47.5925 32.9465 47.5605 32.8185C47.5285 32.6905 47.5365 32.5625 47.5845 32.4345C47.6405 32.2985 47.7445 32.1865 47.8965 32.0985L49.5525 31.1025C49.7125 31.0065 49.8725 30.9265 50.0325 30.8625C50.1925 30.7905 50.3405 30.7545 50.4765 30.7545C50.6445 30.7545 50.7845 30.8025 50.8965 30.8985C51.0085 30.9865 51.0645 31.1345 51.0645 31.3425V38.0385H52.2885C52.4965 38.0385 52.6565 38.0905 52.7685 38.1945C52.8885 38.2985 52.9485 38.4545 52.9485 38.6625C52.9485 38.8705 52.8885 39.0305 52.7685 39.1425C52.6565 39.2545 52.4965 39.3105 52.2885 39.3105H48.1845Z" fill="#ED7117"/>
                        <mask id="path-3-inside-1_2_159" fill="white">
                            <path d="M63.6501 44.467C62.0493 49.4882 59.0876 53.9672 55.0941 57.4062C51.1006 60.8452 46.2317 63.1096 41.0286 63.9476C35.8255 64.7857 30.4919 64.1646 25.6205 62.1534C20.7492 60.1422 16.5309 56.8196 13.4345 52.555C10.3381 48.2904 8.4848 43.2507 8.0806 37.996C7.67641 32.7414 8.73714 27.4775 11.1449 22.7895C13.5527 18.1015 17.2132 14.1729 21.7196 11.4404C26.2261 8.70784 31.402 7.27835 36.672 7.31078L36.647 11.3729C32.1281 11.3451 27.69 12.5708 23.8258 14.9139C19.9617 17.257 16.8229 20.6256 14.7584 24.6454C12.6938 28.6652 11.7842 33.1788 12.1308 37.6845C12.4774 42.1902 14.0665 46.5116 16.7216 50.1683C19.3767 53.8251 22.9937 56.6741 27.1707 58.3986C31.3477 60.1232 35.9211 60.6557 40.3827 59.9371C44.8442 59.2185 49.0191 57.2769 52.4434 54.3281C55.8676 51.3792 58.4072 47.5387 59.7799 43.2332L63.6501 44.467Z"/>
                        </mask>
                        <path d="M63.6501 44.467C62.0493 49.4882 59.0876 53.9672 55.0941 57.4062C51.1006 60.8452 46.2317 63.1096 41.0286 63.9476C35.8255 64.7857 30.4919 64.1646 25.6205 62.1534C20.7492 60.1422 16.5309 56.8196 13.4345 52.555C10.3381 48.2904 8.4848 43.2507 8.0806 37.996C7.67641 32.7414 8.73714 27.4775 11.1449 22.7895C13.5527 18.1015 17.2132 14.1729 21.7196 11.4404C26.2261 8.70784 31.402 7.27835 36.672 7.31078L36.647 11.3729C32.1281 11.3451 27.69 12.5708 23.8258 14.9139C19.9617 17.257 16.8229 20.6256 14.7584 24.6454C12.6938 28.6652 11.7842 33.1788 12.1308 37.6845C12.4774 42.1902 14.0665 46.5116 16.7216 50.1683C19.3767 53.8251 22.9937 56.6741 27.1707 58.3986C31.3477 60.1232 35.9211 60.6557 40.3827 59.9371C44.8442 59.2185 49.0191 57.2769 52.4434 54.3281C55.8676 51.3792 58.4072 47.5387 59.7799 43.2332L63.6501 44.467Z" stroke="#FEDEC7" stroke-width="8" mask="url(#path-3-inside-1_2_159)"/>
                    </SvgIcon>
                    <h3 className="stages-elem__headline">Свяжитесь с нами</h3>
                    <p className="stages-elem__text">Оставьте заявку в форме обратной связи. В кротчайшее сроки наши специалисты свяжутся с вами.</p>
                </div>
                <div className="stages-elems__dash"/>
                <div className='stages-elem'>
                    <SvgIcon className='stages-elem__svg' viewBox="0 0 73 72">
                        <circle cx="28.7734" cy="28.7432" r="26.5" fill="#FEDEC7" stroke="#ED7117" stroke-width="4"/>
                        <path d="M12.7009 32.2432C12.4369 32.2432 12.2329 32.1752 12.0889 32.0392C11.9529 31.8952 11.8849 31.6912 11.8849 31.4272V24.4792C11.8849 24.2232 11.9489 24.0272 12.0769 23.8912C12.2129 23.7552 12.4009 23.6872 12.6409 23.6872C12.8889 23.6872 13.0769 23.7552 13.2049 23.8912C13.3329 24.0272 13.3969 24.2232 13.3969 24.4792V30.9592H16.6249V24.4792C16.6249 24.2232 16.6889 24.0272 16.8169 23.8912C16.9529 23.7552 17.1409 23.6872 17.3809 23.6872C17.6289 23.6872 17.8169 23.7552 17.9449 23.8912C18.0729 24.0272 18.1369 24.2232 18.1369 24.4792V30.9592H21.3649V24.4792C21.3649 24.2232 21.4289 24.0272 21.5569 23.8912C21.6929 23.7552 21.8809 23.6872 22.1209 23.6872C22.3689 23.6872 22.5569 23.7552 22.6849 23.8912C22.8129 24.0272 22.8769 24.2232 22.8769 24.4792V31.4272C22.8769 31.6912 22.8049 31.8952 22.6609 32.0392C22.5249 32.1752 22.3249 32.2432 22.0609 32.2432H12.7009ZM26.6007 32.3632C26.1767 32.3632 25.7967 32.2832 25.4607 32.1232C25.1327 31.9552 24.8727 31.7312 24.6807 31.4512C24.4967 31.1712 24.4047 30.8552 24.4047 30.5032C24.4047 30.0712 24.5167 29.7312 24.7407 29.4832C24.9647 29.2272 25.3287 29.0432 25.8327 28.9312C26.3367 28.8192 27.0127 28.7632 27.8607 28.7632H28.4607V29.6272H27.8727C27.3767 29.6272 26.9807 29.6512 26.6847 29.6992C26.3887 29.7472 26.1767 29.8312 26.0487 29.9512C25.9287 30.0632 25.8687 30.2232 25.8687 30.4312C25.8687 30.6952 25.9607 30.9112 26.1447 31.0792C26.3287 31.2472 26.5847 31.3312 26.9127 31.3312C27.1767 31.3312 27.4087 31.2712 27.6087 31.1512C27.8167 31.0232 27.9807 30.8512 28.1007 30.6352C28.2207 30.4192 28.2807 30.1712 28.2807 29.8912V28.5112C28.2807 28.1112 28.1927 27.8232 28.0167 27.6472C27.8407 27.4712 27.5447 27.3832 27.1287 27.3832C26.8967 27.3832 26.6447 27.4112 26.3727 27.4672C26.1087 27.5232 25.8287 27.6192 25.5327 27.7552C25.3807 27.8272 25.2447 27.8472 25.1247 27.8152C25.0127 27.7832 24.9247 27.7192 24.8607 27.6232C24.7967 27.5192 24.7647 27.4072 24.7647 27.2872C24.7647 27.1672 24.7967 27.0512 24.8607 26.9392C24.9247 26.8192 25.0327 26.7312 25.1847 26.6752C25.5527 26.5232 25.9047 26.4152 26.2407 26.3512C26.5847 26.2872 26.8967 26.2552 27.1767 26.2552C27.7527 26.2552 28.2247 26.3432 28.5927 26.5192C28.9687 26.6952 29.2487 26.9632 29.4327 27.3232C29.6167 27.6752 29.7087 28.1312 29.7087 28.6912V31.5712C29.7087 31.8192 29.6487 32.0112 29.5287 32.1472C29.4087 32.2752 29.2367 32.3392 29.0127 32.3392C28.7887 32.3392 28.6127 32.2752 28.4847 32.1472C28.3647 32.0112 28.3047 31.8192 28.3047 31.5712V30.9952H28.4007C28.3447 31.2752 28.2327 31.5192 28.0647 31.7272C27.9047 31.9272 27.7007 32.0832 27.4527 32.1952C27.2047 32.3072 26.9207 32.3632 26.6007 32.3632ZM32.1393 32.3392C31.8993 32.3392 31.7113 32.2712 31.5753 32.1352C31.4473 31.9992 31.3833 31.8072 31.3833 31.5592V27.2152C31.3833 26.9432 31.4553 26.7352 31.5993 26.5912C31.7433 26.4472 31.9513 26.3752 32.2233 26.3752H35.2833C35.4993 26.3752 35.6593 26.4232 35.7633 26.5192C35.8673 26.6152 35.9193 26.7632 35.9193 26.9632C35.9193 27.1552 35.8673 27.3032 35.7633 27.4072C35.6593 27.5032 35.4993 27.5512 35.2833 27.5512H32.8833V31.5592C32.8833 32.0792 32.6353 32.3392 32.1393 32.3392ZM40.8694 32.2432C40.6134 32.2432 40.4254 32.1872 40.3054 32.0752C40.1934 31.9552 40.1374 31.7832 40.1374 31.5592C40.1374 31.4232 40.1734 31.2912 40.2454 31.1632C40.3174 31.0352 40.4214 30.8992 40.5574 30.7552L42.9694 28.1872C43.3374 27.8032 43.6014 27.4552 43.7614 27.1432C43.9214 26.8232 44.0014 26.5032 44.0014 26.1832C44.0014 25.7832 43.8734 25.4792 43.6174 25.2712C43.3694 25.0632 43.0054 24.9592 42.5254 24.9592C42.2534 24.9592 41.9814 24.9992 41.7094 25.0792C41.4374 25.1512 41.1614 25.2792 40.8814 25.4632C40.7374 25.5592 40.6014 25.5992 40.4734 25.5832C40.3534 25.5672 40.2454 25.5152 40.1494 25.4272C40.0614 25.3392 40.0014 25.2312 39.9694 25.1032C39.9374 24.9752 39.9414 24.8472 39.9814 24.7192C40.0294 24.5832 40.1254 24.4672 40.2694 24.3712C40.6134 24.1392 40.9974 23.9632 41.4214 23.8432C41.8534 23.7232 42.2854 23.6632 42.7174 23.6632C43.3254 23.6632 43.8374 23.7552 44.2534 23.9392C44.6694 24.1232 44.9854 24.3912 45.2014 24.7432C45.4174 25.0952 45.5254 25.5232 45.5254 26.0272C45.5254 26.3632 45.4694 26.6912 45.3574 27.0112C45.2534 27.3312 45.0894 27.6552 44.8654 27.9832C44.6494 28.3112 44.3654 28.6592 44.0134 29.0272L41.7574 31.3792V30.9712H45.2854C45.5014 30.9712 45.6654 31.0232 45.7774 31.1272C45.8894 31.2312 45.9454 31.3872 45.9454 31.5952C45.9454 31.8032 45.8894 31.9632 45.7774 32.0752C45.6654 32.1872 45.5014 32.2432 45.2854 32.2432H40.8694Z" fill="#ED7117"/>
                        <mask id="path-3-inside-1_2_163" fill="white">
                            <path d="M28.4378 0.214895C24.7036 0.243157 21.0115 1.0083 17.5724 2.46663C14.1333 3.92495 11.0145 6.04792 8.39401 8.71429C5.77356 11.3807 3.7028 14.5382 2.29994 18.0067C0.897096 21.4752 0.189639 25.1867 0.217964 28.9293L5.57942 28.8887C5.55644 25.8518 6.13051 22.8401 7.26885 20.0256C8.4072 17.2111 10.0875 14.6489 12.2139 12.4852C14.3403 10.3216 16.871 8.59889 19.6617 7.41553C22.4524 6.23217 25.4483 5.61129 28.4785 5.58836L28.4378 0.214895Z"/>
                        </mask>
                        <path d="M28.4378 0.214895C24.7036 0.243157 21.0115 1.0083 17.5724 2.46663C14.1333 3.92495 11.0145 6.04792 8.39401 8.71429C5.77356 11.3807 3.7028 14.5382 2.29994 18.0067C0.897096 21.4752 0.189639 25.1867 0.217964 28.9293L5.57942 28.8887C5.55644 25.8518 6.13051 22.8401 7.26885 20.0256C8.4072 17.2111 10.0875 14.6489 12.2139 12.4852C14.3403 10.3216 16.871 8.59889 19.6617 7.41553C22.4524 6.23217 25.4483 5.61129 28.4785 5.58836L28.4378 0.214895Z" stroke="#FEDEC7" stroke-width="8" stroke-linejoin="round" mask="url(#path-3-inside-1_2_163)"/>
                    </SvgIcon>
                    <h3 className="stages-elem__headline">Предоставьте остатки</h3>
                    <p className="stages-elem__text">Отправьте нам данные о наличии товара и цены для продажи, в любой удобной для вас форме. Техническую интеграцию больших объемов товаров берем на себя.</p>
                </div>
                <div className="stages-elems__dash"/>
                <div className='stages-elem'>
                    <SvgIcon className='stages-elem__svg' viewBox="0 0 73 72">
                        <circle cx="28.5" cy="28.5" r="26.5" fill="#FEDEC7" stroke="#ED7117" stroke-width="4"/>
                        <path d="M12.4275 32C12.1635 32 11.9595 31.932 11.8155 31.796C11.6795 31.652 11.6115 31.448 11.6115 31.184V24.236C11.6115 23.98 11.6755 23.784 11.8035 23.648C11.9395 23.512 12.1275 23.444 12.3675 23.444C12.6155 23.444 12.8035 23.512 12.9315 23.648C13.0595 23.784 13.1235 23.98 13.1235 24.236V30.716H16.3515V24.236C16.3515 23.98 16.4155 23.784 16.5435 23.648C16.6795 23.512 16.8675 23.444 17.1075 23.444C17.3555 23.444 17.5435 23.512 17.6715 23.648C17.7995 23.784 17.8635 23.98 17.8635 24.236V30.716H21.0915V24.236C21.0915 23.98 21.1555 23.784 21.2835 23.648C21.4195 23.512 21.6075 23.444 21.8475 23.444C22.0955 23.444 22.2835 23.512 22.4115 23.648C22.5395 23.784 22.6035 23.98 22.6035 24.236V31.184C22.6035 31.448 22.5315 31.652 22.3875 31.796C22.2515 31.932 22.0515 32 21.7875 32H12.4275ZM26.3273 32.12C25.9033 32.12 25.5233 32.04 25.1873 31.88C24.8593 31.712 24.5993 31.488 24.4073 31.208C24.2233 30.928 24.1313 30.612 24.1313 30.26C24.1313 29.828 24.2433 29.488 24.4673 29.24C24.6913 28.984 25.0553 28.8 25.5593 28.688C26.0633 28.576 26.7393 28.52 27.5873 28.52H28.1873V29.384H27.5993C27.1033 29.384 26.7073 29.408 26.4113 29.456C26.1153 29.504 25.9033 29.588 25.7753 29.708C25.6553 29.82 25.5953 29.98 25.5953 30.188C25.5953 30.452 25.6873 30.668 25.8713 30.836C26.0553 31.004 26.3113 31.088 26.6393 31.088C26.9033 31.088 27.1353 31.028 27.3353 30.908C27.5433 30.78 27.7073 30.608 27.8273 30.392C27.9473 30.176 28.0073 29.928 28.0073 29.648V28.268C28.0073 27.868 27.9193 27.58 27.7433 27.404C27.5673 27.228 27.2713 27.14 26.8553 27.14C26.6233 27.14 26.3713 27.168 26.0993 27.224C25.8353 27.28 25.5553 27.376 25.2593 27.512C25.1073 27.584 24.9713 27.604 24.8513 27.572C24.7393 27.54 24.6513 27.476 24.5873 27.38C24.5233 27.276 24.4913 27.164 24.4913 27.044C24.4913 26.924 24.5233 26.808 24.5873 26.696C24.6513 26.576 24.7593 26.488 24.9113 26.432C25.2793 26.28 25.6313 26.172 25.9673 26.108C26.3113 26.044 26.6233 26.012 26.9033 26.012C27.4793 26.012 27.9513 26.1 28.3193 26.276C28.6953 26.452 28.9753 26.72 29.1593 27.08C29.3433 27.432 29.4353 27.888 29.4353 28.448V31.328C29.4353 31.576 29.3753 31.768 29.2553 31.904C29.1353 32.032 28.9633 32.096 28.7393 32.096C28.5153 32.096 28.3393 32.032 28.2113 31.904C28.0913 31.768 28.0313 31.576 28.0313 31.328V30.752H28.1273C28.0713 31.032 27.9593 31.276 27.7913 31.484C27.6313 31.684 27.4273 31.84 27.1793 31.952C26.9313 32.064 26.6473 32.12 26.3273 32.12ZM31.8658 32.096C31.6258 32.096 31.4378 32.028 31.3018 31.892C31.1738 31.756 31.1098 31.564 31.1098 31.316V26.972C31.1098 26.7 31.1818 26.492 31.3258 26.348C31.4698 26.204 31.6778 26.132 31.9498 26.132H35.0098C35.2258 26.132 35.3858 26.18 35.4898 26.276C35.5938 26.372 35.6458 26.52 35.6458 26.72C35.6458 26.912 35.5938 27.06 35.4898 27.164C35.3858 27.26 35.2258 27.308 35.0098 27.308H32.6098V31.316C32.6098 31.836 32.3618 32.096 31.8658 32.096ZM42.432 32.12C42 32.12 41.552 32.064 41.088 31.952C40.624 31.84 40.22 31.672 39.876 31.448C39.716 31.344 39.608 31.224 39.552 31.088C39.496 30.952 39.48 30.824 39.504 30.704C39.536 30.576 39.596 30.468 39.684 30.38C39.78 30.292 39.896 30.24 40.032 30.224C40.176 30.208 40.332 30.244 40.5 30.332C40.828 30.508 41.144 30.636 41.448 30.716C41.752 30.788 42.064 30.824 42.384 30.824C42.736 30.824 43.032 30.776 43.272 30.68C43.512 30.584 43.692 30.44 43.812 30.248C43.94 30.056 44.004 29.824 44.004 29.552C44.004 29.152 43.868 28.856 43.596 28.664C43.332 28.464 42.944 28.364 42.432 28.364H41.664C41.44 28.364 41.268 28.308 41.148 28.196C41.036 28.084 40.98 27.928 40.98 27.728C40.98 27.528 41.036 27.372 41.148 27.26C41.268 27.148 41.44 27.092 41.664 27.092H42.288C42.592 27.092 42.852 27.044 43.068 26.948C43.284 26.844 43.452 26.7 43.572 26.516C43.692 26.332 43.752 26.108 43.752 25.844C43.752 25.476 43.628 25.196 43.38 25.004C43.14 24.812 42.788 24.716 42.324 24.716C42.028 24.716 41.748 24.752 41.484 24.824C41.228 24.888 40.944 25.012 40.632 25.196C40.488 25.284 40.348 25.32 40.212 25.304C40.084 25.288 39.976 25.236 39.888 25.148C39.8 25.06 39.74 24.956 39.708 24.836C39.676 24.708 39.684 24.58 39.732 24.452C39.78 24.316 39.88 24.2 40.032 24.104C40.376 23.88 40.756 23.712 41.172 23.6C41.588 23.48 42.016 23.42 42.456 23.42C43.04 23.42 43.54 23.512 43.956 23.696C44.372 23.872 44.688 24.128 44.904 24.464C45.128 24.792 45.24 25.192 45.24 25.664C45.24 26 45.176 26.308 45.048 26.588C44.92 26.86 44.74 27.092 44.508 27.284C44.276 27.476 43.996 27.612 43.668 27.692V27.548C44.244 27.644 44.692 27.884 45.012 28.268C45.332 28.644 45.492 29.116 45.492 29.684C45.492 30.18 45.368 30.612 45.12 30.98C44.872 31.348 44.52 31.632 44.064 31.832C43.608 32.024 43.064 32.12 42.432 32.12Z" fill="#ED7117"/>
                    </SvgIcon>
                    <h3 className="stages-elem__headline">Обновляйте остатки</h3>
                    <p className="stages-elem__text">Поддерживайте остатки и стоимости в актуальном виде и все продажи будут вашими. Мы об этом позаботимся!</p>
                </div>
            </div>
        </div>
    )
}

export default Stages