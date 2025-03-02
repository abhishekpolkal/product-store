// src/pages/index.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ProductCard from '../components/ProductCard';
import CategoryList from '../components/CategoryList';

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        Promise.all([
            fetch('https://dummyjson.com/products/categories').then(res => res.json()),
            fetch('https://dummyjson.com/products').then(res => res.json())
        ]).then(([catData, productData]) => {
            setCategories(catData);
            setProducts(productData.products);
            setIsLoading(false);
        }).catch(() => setIsLoading(false));
    }, []);

    const handleProductClick = (product) => {
        router.push(`/products/${product.id}`);
    };

    const filteredProducts = products
        .filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(product => {
            if (selectedCategory === 'All') return true;
            const matchedCategory = categories.find(cat => cat.name === selectedCategory);
            return product.category === matchedCategory?.slug;
        });

    return (
        <div className="container">
            <h2 style={{ marginBottom: '8px' }}>Products</h2>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    width: '100%',
                    padding: '8px',
                    marginBottom: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                }}
            />
            <CategoryList
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            {isLoading ? (
                <div>Loading products...</div>
            ) : (
                <div className="product-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onClick={() => handleProductClick(product)}
                            />
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            )}
        </div>
    );
}



