import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../component/Product/ProductList';

const Setting = () => {
    
    const [products, setProduct] = useState ([]);
    
    useEffect ( () => {
        axios.get('https://fakestoreapi.com/products')
        .then(res =>{
            console.log('response',res)
            setProduct(res.data)
        })
        .catch (err => {
            console.log ('error', err)
        })
    }, [])


    return(
        <>
          <div className='w-screen h-screen'>
             <ProductList products={products}/>
          </div>
        </>
    )

};

export default Setting;
