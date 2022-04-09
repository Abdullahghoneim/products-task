import React from 'react'
import styles from './Product.module.scss';
import Edit from '../../assets/edit.png'
function ProductCard({ image, title, price }) {
    return (
        <div className={styles.Product}>
            <button className={styles.MenuWrpaer}>
                <img className={styles.Setting} src={Edit} alt="" />
            </button>
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