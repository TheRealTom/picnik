import React from 'react'
import { Card, Button } from 'react-bootstrap'
import moment from 'moment'

const BasketSummary = ({project}) => {
  return (
    <div style={{marginTop: "20px"}}>
      <Card style={{ width: '25rem', height: '300px'}}>
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{project.title}</Card.Title>
            <Card.Text style={{ color: 'black'}}>{project.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Posted by {project.authorFirstName} {project.authorLastName} {moment(project.createdTime.toDate()).calendar()}</small>
          </Card.Footer>
        </Card>
        
    </div>
  )
}

export default BasketSummary