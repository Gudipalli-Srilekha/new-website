import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
const General = ({cat}) =>{
  const [Data, setData] = useState("");
    //state variable to store the data fetched from API
    const fetchData = async() => {await axios.get(cat
      ? 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c00c45977ede4dc7b9f22c6bc297a588'
      : "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=c00c45977ede4dc7b9f22c6bc297a588"
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
        <Col key={index}  className='my-3'>
          <Card  className="p-3"style={{
                                width: '22rem',height:"40rem",boxShadow:"2px 2px 10px silver", borderRadius:"10px"
                            }}>
            <img src={data.urlToImage} alt="image not found" className='img-fluid' style={{width:"100%",height:"250px",objectFit:"cover"}}/>
            <CardBody style={{ backgroundColor: '#ecedf8' }}>
              <CardTitle tag='h5'>{data.title}</CardTitle>
              
              <CardText>{data.description}</CardText>
              <Button><Link to={data.url} target="_blank">ReadMore</Link></Button>
            </CardBody>
          </Card>
        </Col>
      )):"Loading...."}
          
       
       
        
      </Row>
    </div>
  )
}
 
export default General;