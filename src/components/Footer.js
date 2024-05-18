import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='py-10 bg-slate-800 text-white'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-dark' href='/'>
            NewsApp.com
          </a>
        </div>
      </div>
    )
  }
}
