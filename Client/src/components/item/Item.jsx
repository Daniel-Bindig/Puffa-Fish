import React from 'react'
import './Item.css'

const Item = (props) => {
    const { products } = props;
    return (
        <div>
            <div>
                {products && products.map((product) => (
                    <div key={product.id}>
                    <div>
                        <p>{product.title}</p>
                        <div>
                            <p>{product.price}</p>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            

        </div>
);
}

export default Item;