/* This component is used to render the details of a selected user */

import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


export default function UserInfo(props){

  
    var prevRoute="/users";
    var cardElement;

    if (props.location.state !== undefined) {
      prevRoute = props.location.state.prevRoute;
      const {name,address,phone,website,company} = props.location.state.userDetails;

      cardElement = ( <Card  style={{ width: '20rem' }}>
 
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <p> Address :</p>
        <p><strong>{address.street}</strong></p>
        <p><strong>{address.suite}</strong></p>
        <p><strong>{address.city}</strong></p>
        <p><strong>{address.zipcode}</strong></p>
   
        
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>Phone : <strong>{phone}</strong></ListGroupItem>
      <ListGroupItem>Website : <strong>{website}</strong></ListGroupItem>
      <ListGroupItem>Company Name :<strong>{company.name}</strong></ListGroupItem>
    </ListGroup>
   
   </Card>);
  }
  else
  {
    cardElement = <div> Please Go Back to ther previous page and Select a User. </div>;
  }

 return (
    <div className="parentDiv">

<header>
  <h2>User Information</h2>
</header>

<section>
  <nav>
  <Link to={prevRoute}><Button>Go Back</Button></Link>
  </nav>
  
  <article className="cardStyles">
  {cardElement}

    </article>
</section>

<footer>
  <p></p>
</footer>

    </div>
  ) 
}