import React from 'react'
import Product from './Product'

export const GridView = ({products}) => {
  return (
    <>
      <div className='filterProductList2'>
        {products.map((curElem)=>{
            return <Product key={curElem.id} {...curElem}/>
        })}
      </div>
    </>
  )
}
