import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Product() {

  let [products, setProducts] = useState([]);

    useEffect(() => {
      axios.get('https://mingukang-coding.github.io/react_prac/my-json-data')
        .then((res) => {
          setProducts(res.data);
        })
        .catch(() => {
          console.log('Error : fail to load data..');
        });
    }, []);
    
    return (

      <Row xs={1} md={2} className="g-4" style={{ paddingTop: '24px' }}>
        
        { products.map((_, idx) => (
          <Col key={idx} >
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <button className='btn btn-danger' style={{display : 'centre'}}>Order now</button>
                </Card.Body>
              </Card>
          </Col>
        ))}
      </Row>
    );
  }
  
  export default Product;