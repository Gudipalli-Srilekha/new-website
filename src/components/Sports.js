import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
const Sports = ({cat}) =>{
  const [Data, setData] = useState("");
    //state variable to store the data fetched from API
    const fetchData = async() => {await axios.get(cat
      ? 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c00c45977ede4dc7b9f22c6bc297a588'
      : "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c00c45977ede4dc7b9f22c6bc297a588"
      )
      .then((res)=>setData(res.data.articles))
      .catch(err => console.log(err));

    };
    useEffect(()=>{
      fetchData();
    },[cat])
return (
    <div style={{ backgroundColor: '#ecedf8' }}>
      <Row xs="1" sm="2" md="4">{ Data ? Data.map((data,index)=>(
        <Col key={index}  className='my-3 bg:#ecedf8'>
          <Card  className="p-3">
            <img  src={data.urlToImage}  className='img-fluid' alt="image not found" />
            <CardBody style={{ backgroundColor: '#ecedf8' }}>
              <CardTitle tag='h5'>{data.title}</CardTitle>
              
              {/* <CardText>{data.description}</CardText> */}
              <Button><Link to={data.url} >ReadMore</Link></Button>
            </CardBody>
          </Card>
        </Col>
      )):"Loading...."}
          
       
       
        
      </Row>
    </div>
  )
}
 
export default Sports;