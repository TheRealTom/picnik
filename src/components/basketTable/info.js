import React from 'react'
import { Card } from 'react-bootstrap'
import moment from 'moment'

const Info = (props) => {
    const {notifications} = props;
        return(
        <div className="section">
            <Card border="secondary" style={{height: 'flex', marginTop: "2rem", 
            marginLeft: "1rem", marginRight: "1rem", marginBottom: "1rem"}}>
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>notifications</Card.Title>
                    <Card.Text style={{ color: 'black'}}>
                        { notifications && notifications.map(item => {
                            return (
                                <li key={item.id}>
                                    <span style={{ color: 'red' }}>{item.user} </span>
                                    <span>{item.content}</span>
                                    <div className='date' style={{ color: 'grey' }}>
                                        {moment(item.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        )
    }

export default Info