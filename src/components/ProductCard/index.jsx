import React from 'react'
import styles from './Product.module.scss';

function ProductCard({ image, title, price }) {
    return (
        <div className={styles.Product}>
            <div className={styles.Image} style={{
                background: `url(${image})`,
            }} />
            <div className={styles.CardContant}>
                <h1 className={styles.Title}> {title} </h1>
                <div className={styles.ProceWraper}>
                    <div className={styles.Price}>
                        <p> £ {price} </p>
                    </div>
                    <small>
                        incl. VAT
                    </small>
                </div>
            </div>
        </div >
    )
}

export default ProductCard