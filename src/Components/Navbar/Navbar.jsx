import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import logo from './logo.png';
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
            <img src={logo} alt='cookie logo' className='logo'></img>
          </div>
        </div>
        <div className="links-container">
          <div className="link">
            <Link to='/'>Home</Link>
          </div>
          <div className="link">
            <Link to='/blog'> Blog Posts</Link>
          </div>
          <div className="link">
            <Link to='/about'>About</Link>
          </div>
        </div>

        <Route path='/blog'/>
        <Route path='/about'/>
      </div>
    )
  }
}
