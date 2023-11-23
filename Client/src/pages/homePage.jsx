import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries'
import Item from '../components/item/Item'

const HomePage = () => {

    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const products = data?.products || [];

    return (
        <div className='fullscreen'>
            <h3 className='stock text-4xl text-sky-500 p-4'>In Stock</h3>
            <Item products={products}/>
        </div>
    )
}

export default HomePage