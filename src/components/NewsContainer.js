import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Footer from './Footer';

export default class NewsContainer extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     articles: [],
  //     page: 1,
  //   }
  // }

  state = {
    articles: [],
    page: 1,
    loading : false,
  }


  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=48f70e34774e4688894b6bae76eef555&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({
      loading : true,
    })

    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading : false,
    })

  }

  prev = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=48f70e34774e4688894b6bae76eef555&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    })
  }

  next = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=48f70e34774e4688894b6bae76eef555&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    })

  }

  render() {

    return (
      <div className='black'>
        <div className={`font-bold text-center py-10 text-4xl text-white`}>{this.props.heading} - News</div>
        {this.state.loading && <Spinner/>}
        <div className='w-3/4 my-6 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12'>
          {this?.state?.articles?.map((element) => {
            return <NewsItem key={element.url} title={element.title} desc={element.description} imageUrl={element.urlToImage == null ? 'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png' : element.urlToImage} newsUrl={element.url} />
          })}
        </div>
        <div className={`${this.state.loading && 'hidden'} w-3/4 mt-10 flex justify-center space-x-36 mx-auto font-mono`}>
          <button disabled={this.state.page <= 1} onClick={this.prev} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Prev</button>
          <button disabled={this.state.page + 1 > (Math.ceil(this.state.totalArticles / this.props.pageSize))} onClick={this.next} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Next</button>
        </div>
        <Footer/>
      </div>
    )
  }
}

