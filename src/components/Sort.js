import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from '../context/filter_Context';

const Sort = () => {
  const {filter_products,setGridView,setListView,grid_view,sorting}=useFilterContext();

  return (
    <>
      <Container className='my-4'>
        <Row>
          <Col md={3} lg={3} sm={6}>
          
          </Col>
          <Col className='SortCol2' md={9} lg={9} sm={6}>
                <button onClick={setGridView} className={grid_view?"active sort-btn":"sort-btn"}><BsFillGridFill className='icon'/></button> 
                <button onClick={setListView} className={!grid_view?"active sort-btn":"sort-btn"}><BsList className='icon'/></button>       
                <div className="product-data">
                     <p>{`${filter_products.length} Product Available`}</p>
                </div>
                <div  className='SortCol2form'>
                  <form active='#'> 
                     <label htmlFor='sort'></label>
                     <select 
                       name='sort'
                       id='sort'
                       className=''
                       onClick={sorting}>
                      <option value='lowest'>Price(lowest)</option>
                      <option value='#' disabled></option>
                      <option value='highest'>Price(highest)</option>
                      <option value='#' disabled></option>
                      <option value='a-z'>Products(A-Z)</option>
                      <option value='#' disabled></option>
                      <option value='z-a'>Products(Z-A)</option>
                     </select>
                  </form>
                </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Sort