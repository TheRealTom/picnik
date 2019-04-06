import React from 'react'
import { Card } from 'react-bootstrap'

const BasketSummary = ({project}) => {
  return (
    <div>
        <Card style={{ width: '25rem', height: '300px', text: 'monospace'}}>
            <Card.Body>
                <Card.Title style={{ color: 'black' }}>{project.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">yeet</Card.Subtitle>
                <Card.Text style={{ color: 'black'}}>{project.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Link className="text-muted" href="http://localhost:3000/">Open card</Card.Link>
            </Card.Footer>
        </Card>
    </div>
  )
}

export default BasketSummary
