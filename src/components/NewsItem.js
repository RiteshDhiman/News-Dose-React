import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    return (
      <>

        <div className={`bg-slate-800 overflow-clip hover:-translate-y-1 duration-300 white rounded-lg flex flex-col justify-between shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]`}>
          <a href={this.props.newsUrl} target='_blank' rel="noreferrer" className='hover:scale-105 duration-500 flex justify-center'>
            <img className="rounded-t-lg max-h-80" src={this.props.imageUrl}/>
          </a>
          <div className="p-5">
            <a href="/">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{this.props.title}</h5>
            </a>
            <p className="mb-3 font-normal text-white">{this.props.desc}</p>
            <a href={this.props.newsUrl} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-teal-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>

      </>
    )
  }
}
