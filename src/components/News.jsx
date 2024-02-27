import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Spinner } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    };

    async componentDidMount() {
        console.log("cdm");
        this.setState({ loading: true })

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=69955393c74b4f1187eb003f323254bd&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    };

    handlePrevClick = async () => {
        console.log("Previous");

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=69955393c74b4f1187eb003f323254bd&page=${this.state.page - 1}&pageSize = ${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {
        console.log("Next");
        if (Math.ceil(this.state.page + 1 > this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=69955393c74b4f1187eb003f323254bd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({ loading: false })
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }


    render() {

        return (

            <div className="container my-2 ">
                <h1 className='text-center'>NewsMonkey -Top Headlines</h1>
                {this.state.loading && < Spinner />}
                <div className="row ">

                    {!this.state.loading && this.state.articles.map((element) => {
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
