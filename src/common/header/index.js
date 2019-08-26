import React from 'react'
import './index.css'
import Logo from '../../static/logo.png'
import {connect} from 'react-redux'
// import * as actionCreator from './store/actionCreateor'
import {actionCreator} from './store'
const logoStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'block',
  width: '100px',
  height: '56px',
  backgroundSize: 'contain',
  backgroundImage: `url(${Logo})`
}
const nav = {
  width: '960px',
  height: '100%',
  margin: '0 auto',
  paddingRight: '70px',
  boxSizing: 'border-box'
}

// class Header extends React.Component {
// //   constructor(props) {
// //     super(props)
// //   }
// //   render() {
// //     return (
// //       <div className='header'>
// //         <div style={logoStyle}/>
// //         <div style={nav}>
// //           <p className="nav-item left active">首页</p>
// //           <p className="nav-item left">下载App</p>
// //           <p className="nav-item right">登录</p>
// //           <p className="nav-item right">Aa</p>
// //           <input type="text"
// //                  onFocus={this.props.handleInputFocus}
// //                  onBlur={this.props.handleInputBlur}
// //                  className={this.props.focused ? 'search focused' : 'search'}
// //                  placeholder='搜索'/>
// //         </div>
// //         <div className="addition">
// //           <button className='writer'>写文章</button>
// //           <button className='reg'>注册</button>
// //         </div>
// //       </div>
// //     )
// //
// //   }
// // }

const Header = props => {
  return (
    <div className='header'>
      <div style={logoStyle}/>
      <div style={nav}>
        <p className="nav-item left active">首页</p>
        <p className="nav-item left">下载App</p>
        <p className="nav-item right">登录</p>
        <p className="nav-item right">Aa</p>
        <input type="text"
               onFocus={props.handleInputFocus}
               onBlur={props.handleInputBlur}
               className={props.focused ? 'search focused' : 'search'}
               placeholder='搜索'/>
      </div>
      <div className="addition">
        <button className='writer'>写文章</button>
        <button className='reg'>注册</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {

      dispatch(actionCreator.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)