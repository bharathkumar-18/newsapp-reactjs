import React, { Component } from 'react'
import spinner from './../img/spinner.gif'


export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
            <img src={spinner} alt='Spinner'/>
      </div>
    )
  }
}

export default Spinner
