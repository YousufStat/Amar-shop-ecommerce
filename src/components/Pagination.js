import React from 'react'
import { useProductContext } from '../context/productContext'

export const Pagination = () => {
  const {page,nbPages,getPrevPage,getNextPage}=useProductContext()
  return (
    <>
      <div>
        <button onClick={()=>getPrevPage()}>PREV</button>
        <p>{page+1} of {nbPages}</p>
        <button onClick={()=>getNextPage()}>NEXT</button>
      </div>
    </>
  )
}
