// src/pages/products/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductDetail from '../../components/ProductDetail';

export default function ProductDetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`https://dummyjson.com/products/${id}`)
                .then((res) => res.json())
                .then(setProduct)
                .catch(console.error);
        }
    }, [id]);

    if (!product) {
        return <div className="container">Loading product details...</div>;
    }

    const handleAddToCart = (quantity) => {
        alert(`${quantity} ${product.title}(s) added to cart!`);
    };

    return (
        <div className="container">
            <button onClick={() => router.push('/')}>⬅️ Back</button>
            <ProductDetail product={product} onAddToCart={handleAddToCart} />
        </div>
    );
}
