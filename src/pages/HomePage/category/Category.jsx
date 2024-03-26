import './category.css';
import '../../../index.css';
import Button from "../../../components/buttons/Button";

const Category = () => {
    return (
        <div className="categories wrapper">
            <div className="categories__main-flex">
                <div className="categories__flex">
                    <div className="block t-shirts">
                        <div className='button__t-shirts'>
                            <Button text = "Футболки"/>
                        </div>
                    </div>
                    <div className="small-flex">
                        <div className="block-small bottom">
                            <div className='button__bottom'>
                                <Button text = "Низ"/>
                            </div>
                            
                        </div>
                        <div className="block-small top">
                            <div className='button__top'>
                                <Button text = "Верх"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="categories__flex">
                    <div className="small-flex">
                        <div className="block-small dresses">
                            <div className='button__dresses'>
                                <Button text = "Платья"/> 
                            </div>
                        </div>
                        <div className="block-small castoms">
                            <div className='button__castoms'>
                                <Button text = "Костюмы"/>
                            </div>
                        </div>
                    </div>
                    <div className="block hoodie">
                        <div className='button__hoodie'>
                            <Button text = "Худи"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;