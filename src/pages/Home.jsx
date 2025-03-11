import {Link} from 'react-router-dom';
import {categories} from '../data/products';

const Home = () => {
    return (
        <div className="home-page">
            <div className="hero">
                <h1>Welcome to Router Shop</h1>
                <p>Discover our products by category</p>
                <Link to="/products" className="cta-button">
                    <button>Shop Now</button>
                </Link>
            </div>
            <div className="categories-section">
                <h2>Shop by Category</h2>
                <div className="categories-grid">
                    {categories.map(category => (
                        <div key={category.id} className="category-card">
                            <Link to={`/products/category/${category.id}`}>
                                <h3>{category.name}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Home;