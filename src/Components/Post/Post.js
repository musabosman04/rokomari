import React from 'react';
import './Post.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Post = (props) => {
    const { title, body, img, category, publish, id} = props.blog;
    return (
        <div>
            <div className="container">
                <Link className="text-dark" to={"/post/" + id}>
                    <CardDeck className="post-container">
                        <Card>
                            <Card.Img className="cart-img" variant="top" src={img} />
                            <Card.Body>
                                <Card.Title className="post-title">{title}</Card.Title>
                                <p><i>{category}</i></p>
                                <Card.Text>{body.slice(0, 102)}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">{publish}</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </Link>
            </div>
        </div>
    );
};

export default Post;