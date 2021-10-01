import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../cart/Cart';
import Reviewitem from '../../Reviewitem/Reviewitem';
import { removeFromDb } from '../../utilities/fakedb';
const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);

    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <Reviewitem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></Reviewitem>)
                }
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default OrderReview;