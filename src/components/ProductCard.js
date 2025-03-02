// src/components/ProductCard.js
export default function ProductCard({ product, onClick }) {
    return (
        <div className="product-card" onClick={onClick}>
            <img src={product.thumbnail} alt={product.title} />
            <span>{product.title}</span>
        </div>
    );
}





  