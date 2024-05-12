import React, { useEffect, useState } from 'react'
import "./Style.css"
import { CiHeart } from "react-icons/ci";
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className='productscontainer'>
    
    <ul className='listproducts'>
      {products.map(product => (
        <li key={product.id} className="info">
            <img src={product.images} alt="" />
          <h5 className='title'>{product.title}</h5>
          <p className='title'>Price: {product.price} <CiHeart />
</p>
          {/* <p>{product.description}</p>
          <p>Price: ${product.price}</p> */}
          {/* Add more product details here */}
        </li>
      ))}
      {products.map(product => (
        <li key={product.id} className="info">
            <img src={product.images} alt="" />
          <h5 className='title'>{product.title}</h5>
          <p className='title'>Price: {product.price} <CiHeart />
</p>
          {/* <p>{product.description}</p>
          <p>Price: ${product.price}</p> */}
          {/* Add more product details here */}
        </li>
      ))}
      {products.map(product => (
        <li key={product.id} className="info">
            <img src={product.images} alt="" />
          <h5 className='title'>{product.title}</h5>
          <p className='title'>Price: {product.price} <CiHeart />
</p>
          {/* <p>{product.description}</p>
          <p>Price: ${product.price}</p> */}
          {/* Add more product details here */}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Products