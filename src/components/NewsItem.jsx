import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export class NewsItem extends Component {
    render() {
        const { title, desc, url } = this.props;
        return (
            <div className='container my-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {desc}
                        </Card.Text>
                        <Button variant="primary btn-sm">Read More</Button>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default NewsItem
