import React from 'react'
import { Card } from 'react-bootstrap'
import moment from 'moment'
import { connect } from 'react-redux'

const Info = (props) => {
    const {notifications, auth} = props; 
        return(
        <div className="section">
            <Card border="secondary" style={{width: '25rem', height: 'flex', marginTop: "2rem", 
            marginLeft: "1rem", marginRight: "1rem", marginBottom: "1rem"}}>
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>Notifications</Card.Title>
                    <Card.Text style={{ color: 'black'}}>
                        { notifications && notifications.map(item => {
                            if (item.content == "created Basket" && item.ID == auth.uid) return (
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

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
    }
} 

export default connect(mapStateToProps)(Info)