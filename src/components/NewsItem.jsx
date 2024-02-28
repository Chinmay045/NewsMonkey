import React, { Component } from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class NewsItem extends Component {
    render() {
        const { title, desc, url, newsUrl, author, date } = this.props;
        return (

            // <h2>NewsMonkey Headlines</h2>
            // {this.state.articles.map((element) => {

            //   console.log(element);
            // })}
            <div className='container my-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {desc}...
                        </Card.Text>
                        <p className='card-text' ><small className='text-muted'>By {author ? author : "Unknown"} on {date}</small></p>
                        {/* <Button variant="primary btn-sm" {newsUrl} >Read More</Button> */}
                        <a href={newsUrl} target='_blank' className='btn btn-sm btn-dark' >Read More</a>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default NewsItem;
