import React from 'react'
import { Card } from 'react-bootstrap';

const BasketDetails = () => {
  return (
    <div className="basket-details">
      <Card border="secondary" style={{height: 'flex', marginTop: "2rem", 
        marginLeft: "1rem", marginRight: "1rem", marginBottom: "1rem"}}>
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>Title</Card.Title>
          <Card.Text style={{ color: 'black'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Praesent dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Cras elementum. Integer tempor. Integer in sapien. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Duis viverra diam non justo. Nullam dapibus fermentum ipsum. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Praesent dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Cras elementum. Integer tempor. Integer in sapien. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Duis viverra diam non justo. Nullam dapibus fermentum ipsum. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Praesent dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Cras elementum. Integer tempor. Integer in sapien. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Duis viverra diam non justo. Nullam dapibus fermentum ipsum. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Jmeno <br /> datum</small>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default BasketDetails
