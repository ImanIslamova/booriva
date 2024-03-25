import './footer.css';

const Footer = () => {
    return (
        <section className='footer'>
            <div className='wrapper'>
                <div className='footer__logo'>
                    <img src='images/svg/logo.svg'></img>
                </div>
                <div className='footer__info'>
                    <p className='footer__title'>Инфо</p>
                    <ul className='footer__items'> 
                        <li className='footer__item'>
                            Контакты
                        </li>
                        <li className='footer__item'>
                            Система лояльности                            
                        </li>
                        <li className='footer__item'>
                            Обмен и возврат                            
                        </li>
                        <li className='footer__item'>
                            Доставка и оплата                            
                        </li>
                    </ul>
                </div>
                <div className='footer__address'>
                    <p className='footer__title'>Наш адрес</p>
                    <ul className='footer__items'>
                        <li className='footer__item'>
                            г.Киев, ул. Нижний Вал, 37
                        </li>
                        <li className='footer__item'>
                            Пн — Вс: с 11:00 до 21:00
                        </li>
                    </ul>
                </div>
                <div className='footer__sociality'>
                    <p className='footer__title'>Соц.. сети</p>
                    <div className='sociality'>
                        <img src='images/svg/inst.svg'></img>
                        <img src='images/svg/facebook.svg'></img>
                    </div>
                </div>
                <div className='footer__read-us'>
                    <div>
                        <img src='images/png/ivanka.png' alt='Иванка'></img>
                    </div>
                    <div className='read-us'>
                        <p className='footer__item'>Нам важно знать, что ты думаешь про нас! Просто напиши мне!</p>
                        <p className='footer__title'>Написать Иванке</p>
                    </div>
                </div>
            </div>
           
        </section>
    )
}

export default Footer;