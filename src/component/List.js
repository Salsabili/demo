import React from 'react'
import './style.css'
import {Card , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Rate } from 'antd';
export default function List(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.movie.image} />
  <Card.Body>
    <Card.Title>{props.movie.name}</Card.Title>
    <Card.Text>
      {props.movie.description}
    </Card.Text>
     <Button variant="outline-danger"> Watch</Button>{' '}
     <Rate></Rate>
     
  </Card.Body>
</Card>
        </div>
    )
}
