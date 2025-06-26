import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './store/productSlice';


function Product() {
  const dispatch = useDispatch();

  const [baseImgUrl, setbaseImgUrl] = useState('https://mingukang-coding.github.io/react_prac/product_img/');

  // let [products, setProducts] = useState([]);

    useEffect(() => {
      axios.get(`https://mingukang-coding.github.io/react_prac/my-json-data?timestamp=${Date.now()}`)
        .then((res) => {
          dispatch(setProducts(res.data));
        })
        .catch(() => {
          console.log('Error : fail to load data..');
        });
    }, []);

    const products = useSelector((state) => state.products);

    return (

      <Row xs={1} md={4} className="g-4" style={{ margin: 'auto 5px'}}>
        
        { Array.isArray(products) && products.map((a, idx) => (
          <Col key={idx} >
            <Card onClick={()=>{
            }}>
                <Card.Img variant="top"   
                  style={{ width: '300px', height: '300px', objectFit: 'cover' }} 
                  src={`${baseImgUrl}${a.id}.jpg`}/>
                <Card.Body>
                  <Card.Title>{a.name}</Card.Title>
                  <Card.Text>product category : {a.category}</Card.Text>
                  <Card.Text>{a.cost}</Card.Text>
                  <button className='btn btn-danger' style={{display : 'centre'}}>Add to cart</button>
                </Card.Body>
              </Card>
          </Col>
        ))}
      </Row>
    );
  }
  
  export default Product;