import './insta.css';
import instaOneBig from '../../../assets/images/insta-one-big.png'
import instaOneSmall from '../../../assets/images/insta-one-small.png'
import instaTwo from '../../../assets/images/insta-two.png';
import instaThreeSmall from '../../../assets/images/insta-three-small.png';
import instaThreeBig from '../../../assets/images/insta-three-big.png';



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
                        <img src={instaOneBig} alt = 'фото'></img>
                    </div>
                    <div className='insta__image-container insta__image-container--small'>
                        <img src={instaOneSmall} alt = 'фото'></img>
                    </div>
                </div>
            </div>
            <div className='insta__item'>
                <img src={instaTwo} alt = 'фото'></img>               
            </div>
            <div className='insta__item'>
                <div className='insta__minis insta__minis--second'>
                    <div className='insta__image-container insta__image-container--small'>
                        <img src={instaThreeSmall} alt = 'фото'></img>
                    </div>
                    <div className='insta__image-container insta__image-container--big'>
                        <img src={instaThreeBig} alt = 'фото'></img>
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