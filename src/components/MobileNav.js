import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import { Link } from "react-router-dom";

class MobileNav extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        menuOpen: false
      }
    }
  
    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
      this.setState({menuOpen: state.isOpen})  
    }
    
    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
      this.setState({menuOpen: false})
    }
  
    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu () {
      this.setState(state => ({menuOpen: !state.menuOpen}))
    }
  
    render () {
      return (
        <div className="mobilenav">
          <Menu
            width={ '100%' } 
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
          >
               <nav className="main-nav">
               <Link to="/"><img className="logo" src="logo.svg" alt="logo" style={{paddingLeft: "2%", marginBottom: "60px"}}/></Link>

            <ul>
                <li className="homelink">
                    <Link to="/" onClick={() => this.closeMenu()}>Dashboard</Link>
                </li>
                <li className="stockslink">
                    <Link to="/stocks" onClick={() => this.closeMenu()}>Stocks</Link>
                </li>
                <li className="forexlink">
                    <Link to="/forex" onClick={() => this.closeMenu()}>Forex</Link>
                </li>
                <li className="cryptolink">
                    <Link to="/crypto" onClick={() => this.closeMenu()}>Crypto</Link>
                </li>
                <li className="newslink">
                    <Link to="/news" onClick={() => this.closeMenu()}>News</Link>
                </li>
            </ul>
        </nav>

          </Menu>
     
        </div>
      )
    }
  }
  
  export default MobileNav;