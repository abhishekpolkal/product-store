// src/components/CategoryList.js
export default function CategoryList({ categories, selectedCategory, onSelectCategory }) {
    return (
        <div className="category-list">
            {['All', ...categories.map(cat => cat.name)].map((categoryName) => (
                <button
                    key={categoryName}
                    className={categoryName === selectedCategory ? 'selected' : ''}
                    onClick={() => onSelectCategory(categoryName)}
                >
                    {categoryName}
                </button>
            ))}
        </div>
    );
}

