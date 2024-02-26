import './App.css';


import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import NewsItem from './components/NewsItem';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <h2>NewsMonkey Headlines</h2>

        <div className="row">
          <div className="column col-md-4">
            <NewsItem title="myTitle" desc="myDesc" url="https://s11279.pcdn.co/wp-content/uploads/2024/02/Screenshot-2024-02-09-134618-630x393.png" />
          </div>
          <div className="column col-md-4">
            <NewsItem title="myTitle" desc="myDesc" url="" />
          </div>
          <div className="column col-md-4">
            <NewsItem title="myTitle" desc="myDesc" url="" />
          </div>



        </div>
      </div>
    )
  }
}
