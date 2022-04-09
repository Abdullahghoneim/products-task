import React from 'react'
import ProductCard from '../ProductCard';
import styles from './ProductList.module.scss';

function ProductList({ products }) {
    return (
        <div className={styles.ProductListWraper}>
            {products.map(product => <ProductCard {...product} />)}
        </div>
    )
}

export default ProductList