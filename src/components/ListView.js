import React from "react";
import { Button, Card, Col, Container, NavLink, Row } from "react-bootstrap";


export const ListView = ({products}) => {
  return (
    <> 
        {products.map((curElem) => {
          const { id, title, description, price, thumbnail } = curElem;
          return (
         
              <Container>
                <Row>
                  <Col lg={12} md={12} sm={12}>
                    <div className="">
                      <Card className="text-center" style={{ width: '60rem',display:'inline'}} >
                      <Card.Img variant="top" src={thumbnail} style={{ width: '20rem',height:'13rem',float:'left',marginRight:'30px'}} />
                        <Card.Body style={{ textAlign:'left'}} className="m-3">
                          <Card.Title>{title}</Card.Title>
                          <Card.Text style={{fontSize:'18px'}}>
                          {description.slice(0, 90)}...
                          </Card.Text>
                         
                          <NavLink to={`./singleproduct/${id}`}> 
                          <Button variant="primary" className="mb-1">See More</Button> 
                          </NavLink>
                         
                          <Card.Text style={{fontSize:'20px'}}>
                          ${price}
                          </Card.Text>
                        </Card.Body>

                      </Card>
                    </div>
                  </Col>
                </Row>
              </Container>
            
          );
        })}

    </>
  );
};
