import React from 'react'
import { Card } from 'react-bootstrap'
// import "../../App.css"

const BasketSummary = ({project}) => {
  return (
    <div class = "Container" >
      <div class="order-1 mb-4">
            <Card style={{ width: '25rem', height: '300px', text: 'monospace'}}>
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>{project.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">yeet</Card.Subtitle>
                    <Card.Text style={{ color: 'black'}}>{project.description}</Card.Text>
                </Card.Body>
            </Card>
      </div>
    </div>
  )
}

export default BasketSummary
