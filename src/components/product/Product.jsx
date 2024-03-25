import './product.css';

const Product = ({description, price}) => {
    return (
        <div className="product">
            <div class="product__image-container">
                <img src="/images/png/switshot.png" alt = "свитшот" className="product__image"></img>  
                <div className="product__favor-container">
                    <img src="images/svg/favor-white.svg" className="product__favor product__favor--white"></img>
                    <img src="images/svg/favor-red.svg" className="product__favor product__favor--red"></img>
                </div> 
                <div className='product__options'>
                    <p className='product__name'>{description}</p>
                    <p className='product__price'>{price}</p>
                </div>           

            </div>
    </div>
    )
}

export default Product;