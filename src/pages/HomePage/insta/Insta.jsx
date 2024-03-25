import './insta.css';

const Insta = () => {
    return (
        <section className='insta wrapper'>
            <div className='insta__item'>
                <div>
                    <div className='insta__title'>Instagram</div>
                    <div className='insta__text'>Мы очень рады, когда ты нас отмечаешь) Отмечай, плз чаще</div>
                </div>
                <div className='insta__minis'>
                    <div className='insta__image-container insta__image-container--big'>
                        <img src='images/png/insta-one-big.png' alt = 'фото'></img>
                    </div>
                    <div className='insta__image-container insta__image-container--small'>
                        <img src='images/png/insta-one-small.png' alt = 'фото'></img>
                    </div>
                </div>
            </div>
            <div className='insta__item'>
                <img src='images/png/insta-two.png' alt = 'фото'></img>                
            </div>
            <div className='insta__item'>
                <div className='insta__minis insta__minis--second'>
                    <div className='insta__image-container insta__image-container--small'>
                        <img src='images/png/insta-three-small.png' alt = 'фото'></img>
                    </div>
                    <div className='insta__image-container insta__image-container--big'>
                        <img src='images/png/insta-three-big.png' alt = 'фото'></img>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='insta__tag'>#boorivagirls </div>
                        <div className='insta__text'>Ставь тег, чтобы быть в нашей тусовке</div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Insta;