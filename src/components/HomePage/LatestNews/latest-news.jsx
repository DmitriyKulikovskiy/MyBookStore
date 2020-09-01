import React from 'react'
import './latest-news.sass'

const LatestNews = ({newsData}) => {
    const newsHomePage = newsData.slice(0,3)
    return (
        <div className="container-fluid latest-news-container">
            <div className="title-news">Our latest news</div>
            <div className="container">
                <div className="row latest-news-box">
                    {newsHomePage.map(
                        book =>
                        <div key={book.id} className="col-lg-4">
                            <div className='item-box-news'>
                            <img src={book.image}/>
                                <p className='date-posted-news'>{new Date().toLocaleString()}</p>
                                <p className="heading-news">{book.title}</p>
                                <p className="news-content">{book.content}</p>
                                <div className="button-latest-news">
                                    <button>CONTINUE READING</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <button>View all news</button>
            </div>
        </div>
    )
}

export default LatestNews
