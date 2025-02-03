import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../component/Product/ProductList';
import ProductForm from '../component/Product/ProductForm';

//const API_URL = 'http://172.16.148.101:8883/swagger/index.html#/ ';

const Setting = () => {
    
    const [searchTitle, setSearchTitle] = useState('');
    const [searchPrice, setSearchPrice] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [products, setProducts] = useState ([]);
    const [selectedProduct, setSelectedProduct] = useState (null);
    

    useEffect ( () => {
        axios.get(API_URL)
        .then(res =>{
            console.log('response',res)
            //setProducts(res.data)
        })
        .catch (err => {
            console.log ('error', err)
        })
    }, [])

    const handleSearch = () => {
        let filtered = products;
    
        // Filter title
        if (searchTitle) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchTitle.toLowerCase())
            );
        }
    
        // Filter price 
        if (searchPrice) {
            filtered = filtered.filter(product => product.price === Number(searchPrice));
        }
    
        setFilteredProducts(filtered);
    };
    

    const deleteProduct = (id) => {
        axios.delete(`${API_URL}/${id}`)
        .then(() => {
            const filteredProducts = products.filter ((product)=> product.id !== id)
            setProducts (filteredProducts)
        })
    }

    const addProduct = (payloadData) => {
        axios.post(API_URL, payloadData)
        .then(res =>{
            setProducts([...products, res.data])
        })
        .catch (err =>{
            console.log('error',err)
        })
    }

    return(
        <>
         <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Cari produk..."
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    className="border p-2 rounded-md"
                />
                <select
                    value={searchPrice}
                    onChange={(e) => setSearchPrice(e.target.value)}
                    className="border p-2 rounded-md"
                >
                    <option value="">Semua Harga</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                </select>
                <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-md">
                    Search
                </button>
            </div>


          <div className='w-screen h-screen'>
             <ProductForm
                onAddProduct = {addProduct}
             />
             <ProductList 
                products={filteredProducts.length > 0 ? filteredProducts : products} 
                onDelete={deleteProduct} 
             />

          </div>
          
        </>
    )

};

export default Setting;
