import React, { Component } from 'react'
import NewsItem from './NewsItem';
import { Spinner } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



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
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            totalResults: 0,
            data: []
        }
        document.title = this.props.category;
    };

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=69955393c74b4f1187eb003f323254bd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }

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
        this.setState({ page: this.state - 1 });
        this.updateNews()

    }

    handleNextClick = async () => {
        console.log("Next");
        this.setState({ page: this.state + 1 });
        this.updateNews()
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=69955393c74b4f1187eb003f323254bd&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: this.state.articles.concat, totalResults: parsedData.totalResults, loading: false })
    }


    render() {
        // console.log(this.state.articles)

        return (
            <>
                {/* / <div className="container my-2 "> */}
                <h1 className='text-center'>NewsMonkey -Top Headlines</h1>
                {/* {this.state.loading && < Spinner />} */}


                {/* 
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />} > */}

                <div className="container">
                    <div className="row ">
                        {this.state.articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} desc={element.description ? element.description.slice(0, 88) : ""} url={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div >
                        })}

                    </div>
                </div>
                {/* </InfiniteScroll> */}


            </>
        )



        {/* <div className="container d-flex justify-content-between"> */ }
        {/* <a target='_blank' className='btn btn-sm btn-dark ' href='' onClick={handlePrevClick} >&larr; Previous</a>
                    <a target='_blank' className='btn btn-sm btn-dark ' href='' onClick={handleNextClick}>Next &rarr;</a>
                     */}

        {/* <button type='button' disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
                <button type='button' disabled={this.state.page + 1 > this.state.totalResults / this.props.pageSize} className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button> */}





    }
}


export default News
