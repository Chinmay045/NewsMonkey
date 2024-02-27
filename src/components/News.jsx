import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Uncrate.com"
            },
            "author": "Uncrate",
            "title": "Rimowa Chess Attache Set",
            "description": "Serious chess players can carry their own set in the same style as their other belongings with this attache from Rimowa. The silver anodized aluminum exterior mimics the round-edged minimalism of the brand's suitcase. Inside, black leather pairs with microfib…",
            "url": "https://uncrate.com/rimowa-chess-attache-set/",
            "urlToImage": "https://uncrate.com/p/2024/01/rimowa-chess-set.jpg",
            "publishedAt": "2024-01-25T15:00:12Z",
            "content": "Pearly whites come at a price. Lumineux whitens teeth without extreme sensitivity. Instead of harsh bleaches, the dentist-certifies strips brighten your smile with a non-toxic formula. It uses essent… [+418 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Zacjohnson.com"
            },
            "author": "Disclaimer and DMCA",
            "title": "Best Chess Players of All Time – Updated List for 2028",
            "description": "Who are the best chess players of all time? Throughout history, legendary chess champions and influential grandmasters have emerged, leaving an indelible mark on the game. Their strategic brilliance and unmatched skill have shaped the legacy of chess. In this…",
            "url": "https://zacjohnson.com/best-chess-players-of-all-time/",
            "urlToImage": "https://0043d976.rocketcdn.me/wp-content/uploads/2024/02/best-chess-players-of-all-time.jpg",
            "publishedAt": "2024-02-13T06:39:13Z",
            "content": "Who are the best chess players of all time? Throughout history, legendary chess champions and influential grandmasters have emerged, leaving an indelible mark on the game. Their strategic brilliance … [+24328 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rapradar.com"
            },
            "author": "Paul “Big Homie” Duong",
            "title": "Video: Boosie Badazz “Business Man”",
            "description": "Checkmate! Boosie Badazz is standing on business in his new music video, “Business Man”. Courtesy of Olu The Visionary, the Baton Rouge rapper shares a moment of clarity on his status in the game while heading a board meeting and during a game of chess with h…",
            "url": "https://rapradar.com/2024/02/09/video-boosie-badazz-business-man/",
            "urlToImage": "https://s11279.pcdn.co/wp-content/uploads/2024/02/Screenshot-2024-02-09-134618-630x393.png",
            "publishedAt": "2024-02-09T18:04:00Z",
            "content": "Checkmate!\r\nBoosie Badazz is standing on business in his new music video, “Business Man”.\r\nCourtesy of Olu The Visionary, the Baton Rouge rapper shares a moment of clarity on his status in the game w… [+441 chars]"
        },
        {
            "source": {
                "id": "breitbart-news",
                "name": "Breitbart News"
            },
            "author": "Simon Kent, Simon Kent",
            "title": "Eight-Year-Old Chess Prodigy Becomes Youngest Player to Beat a Grand Master",
            "description": "Meet Ashwath Kaushik. He's an eight-year-old with all the right moves. So many in fact the Singaporean defeated 37-year-old Polish chess grandmaster Jacek Stopa in the fourth round of the Burgdorfer Stadthaus Open in Switzerland over the weekend.",
            "url": "https://www.breitbart.com/sports/2024/02/21/eight-year-old-chess-prodigy-becomes-youngest-player-to-beat-a-grand-master/",
            "urlToImage": "https://media.breitbart.com/media/2024/02/child-chess-prodigby-640x335.jpg",
            "publishedAt": "2024-02-21T09:25:30Z",
            "content": "Meet Ashwath Kaushik. He’s an eight-year-old with all the right moves. So many in fact the Singaporean defeated 37-year-old Polish chess grandmaster Jacek Stopa in the fourth round of the Burgdorfer … [+1706 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Atlantic"
            },
            "author": "Derek Thompson",
            "title": "The New American Nihilism",
            "description": "Political scientists recently coined the phrase need for chaos. Once you learn what it means, you’ll see it everywhere.",
            "url": "https://www.theatlantic.com/ideas/archive/2024/02/need-for-chaos-politicsl-science-concept/677536/?utm_source=feed",
            "urlToImage": null,
            "publishedAt": "2024-02-23T11:00:00Z",
            "content": "This is Work in Progress, a newsletter about work, technology, and how to solve some of America’s biggest problems. Sign up here.Several years ago, the political scientist Michael Bang Petersen, who … [+11875 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
        }
    };

    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=69955393c74b4f1187eb003f323254bd";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }


    render() {

        return (

            <div className="container my-2 ">
                <div className="row ">

                    {this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} desc={element.description?element.description.slice(0,88):""} url={element.urlToImage} newsUrl={element.url} />
                        </div >
                    })}
                </div>
            </div>


        )
    }
}

export default News
