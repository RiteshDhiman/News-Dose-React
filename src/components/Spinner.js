import React, { Component } from 'react';
import loading from './loading.gif';
export default class Spinner extends Component {
  render() {
    return (
      <div className='black flex justify-center'>
        <img className = 'w-14 ' src={loading} alt="No image" />
      </div>
    )
  }
}
