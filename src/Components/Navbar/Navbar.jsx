import React, {Component} from 'react';
import logo from './darci-logo.js'
import './navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    }
  }
  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount')
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('will update')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('did update')
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('should update')
    return this.state !== nextState;
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('will receive props')
  }

  componentWillUnmount() {
    console.log('will unmount')
  }

  componentDidCatch(error, errorInfo) {
    console.log('did catch')
  }

  render() {
    console.log('render')
    return (
      <div className="nav-container">
        <div className="logo-container">
          <div>
            <img className='logo' src={logo} alt="Darci Brand Logo"/>
          </div>
        </div>
        <div className="links-container">
          <div className="link">
            Home
          </div>
          <div className="link">
            Blog Posts
          </div>
          <div className="link">
            About
          </div>
        </div>
      </div>
    )
  }
}