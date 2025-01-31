import React from 'react'

const ProductList = ({products}) => {
  return (
    <>
        <h2>ProductList</h2>
        <ul className='grid grid-cols-5 gap-3'>
            {products.map((product)=>{
                return(
                    <li key={product.id} className='flex flex-col p-1 border rounded-md border-gray-400 text-wrap'>
                        <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mx-auto" />
                        <div className='flex flex-row'>
                            <div>{product.title}</div>
                            <div>{product.price}</div>
                        </div>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default ProductList