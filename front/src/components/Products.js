import React from 'react'
import {useEffect, useState} from 'react'

function Products() {
  const [products, setProducts] = useState([]);
  const api_url = `http://localhost:3000/api/v1/products`

  useEffect(()=>{
    fetch(api_url)
    .then(res => res.json())
    .then(response =>{
      setProducts(response)
    })
  }, []);
  console.log(products)
  
  return (
    <div>
      <h1>Products List</h1>
        <div className="card_wrapper" >
          {products.map((product)=>(
            <div className='card' key={product.id}>
              <span>{product.id}</span>
              <p>{product.Maker} {product.Model}</p>
              <p>{product.ProductType}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Products