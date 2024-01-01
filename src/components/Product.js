import React from 'react'
import { Button, Card } from 'react-bootstrap';

const Product = ({id,title,description,thumbnail}) => {
  // console.log(name);
  return (
    <>
       <Card className="m-4" style={{ width: '19rem' }}>
      <Card.Img className='Card-Img' variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='Card-Des'>
         {description}
        </Card.Text>
        <Button variant="primary">ADD CART</Button>
      </Card.Body>
    </Card>
    </>
  )
}
export default Product;