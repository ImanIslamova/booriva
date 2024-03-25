import Button from "../../buttons/Button";

const Categories = () => {
    return (
        <div className="categories">
            <div className="categories__main-flex">
                <div className="categories__flex">
                    <div className="block t-shirts">
                        <Button text = "Футболки"/>
                    </div>
                    <div className="small-flex">
                        <div className="block-small bottom">
                            <Button text = "Низ"/>
                        </div>
                        <div className="block-small top">
                            <Button text = "Верх"/>
                        </div>
                    </div>
                </div>
                <div className="categories__flex">
                    <div className="small-flex">
                        <div className="block-small dresses">
                            <Button text = "Платья"/>  
                        </div>
                        <div className="block-small castoms">
                            <Button text = "Костюмы"/>
                        </div>
                    </div>
                    <div className="block hoodie">
                        <Button text = "Худи"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;