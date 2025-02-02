import React from 'react'

const ProductList = ({products, onDelete}) => {
  return (
    <>
        
        <ul className='grid grid-cols-5 gap-3'>
            {products.map((product)=>{
                return(
                    <li key={product.id} className='flex flex-col p-1 border rounded-md border-gray-400 text-wrap'>
                        <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mx-auto" />
                        <div className='flex flex-row'>
                            <div>{product.title}</div>
                            <div>{product.price}</div>
                        </div>
                        <button onClick={()=>onDelete(product.id)} className='border rounded bg-red-600 w-full text-white'>delete</button>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default ProductList