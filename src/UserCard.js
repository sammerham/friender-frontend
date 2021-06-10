import React from 'react';
import Card from 'react-bootstrap/Card'



// Prop: User

function UserCard({user}){
    const {firstname, lastname, image_url } = user;
    return (
        <Card className="card UserCard" style={{ marginBottom: "30x" }}>
            <Card.Body>
                <Card.Title>{firstname} {lastname}</Card.Title>
                <Card.Img src={image_url} variant='top'></Card.Img>
            </Card.Body>
        </Card>
  )
}
export default UserCard;