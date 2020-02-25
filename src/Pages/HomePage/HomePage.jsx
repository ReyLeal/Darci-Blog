import React, {Component} from 'react';
// import Header from './home-header.jpg'
import './HomePage.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div className='header-container'>
          <div className='header-text'>
            <div className='header-title'>Darci's Blog</div>
            <div className='header-line'></div>
            <div className='header-description'>Welcome to my blog! We will explore all things baking, with some special appearances from savory dishes. </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home 
