import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Button from 'react-bootstrap/Button';


export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
        }
    };

    async componentDidMount() {
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=69955393c74b4f1187eb003f323254bd&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    };

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=69955393c74b4f1187eb003f323254bd&page=${this.state.page - 1}&pageSize = ${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async () => {
        console.log("Next");
        if (Math.ceil(this.state.page + 1 > this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=69955393c74b4f1187eb003f323254bd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }





    render() {

        return (

            <div className="container my-2 ">
                <div className="row ">

                    {this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} desc={element.description ? element.description.slice(0, 88) : ""} url={element.urlToImage} newsUrl={element.url} />
                        </div >
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    {/* <a target='_blank' className='btn btn-sm btn-dark ' href='' onClick={handlePrevClick} >&larr; Previous</a>
                    <a target='_blank' className='btn btn-sm btn-dark ' href='' onClick={handleNextClick}>Next &rarr;</a>
                     */}

                    <button type='button' disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type='button' disabled={this.state.page + 1 > this.state.totalResults / this.props.pageSize} className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>


        )
    }
};

export default News
