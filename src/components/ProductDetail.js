// src/components/ProductDetail.js
import { useState } from 'react';
import Toast from './Toast';

export default function ProductDetail({ product, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);
    const [showToast, setShowToast] = useState(false);

    const handleAddToCart = () => {
        onAddToCart(quantity);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="container" style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
            <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: 'auto' }} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><b>Price:</b> ${product.price}</p>
            <p><b>Rating:</b> ⭐ {product.rating}</p>

            <div>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span style={{ margin: '0 12px' }}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <button style={{ marginTop: '12px' }} onClick={handleAddToCart}>
                Add to Cart
            </button>

            <Toast message="Product added to cart!" visible={showToast} />
        </div>
    );
}



  