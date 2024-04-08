import "./CategoryItems.css";

function CategoryItem() {
    return (
        <li className="category-item">
            <a href="#">
                <img src="/imgimg/categories/categories1.png" alt="" className="category-image" />
                <span className="category-title">Smartphone</span>
            </a>
        </li>
    )
}

export default CategoryItem