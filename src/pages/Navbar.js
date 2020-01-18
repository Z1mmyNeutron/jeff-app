import React from "react"

import Grid from '@material-ui/core/Grid'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import './Navbar.css'
export default class Navbar extends React.Component{
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0}
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions = () => {
    this.setState({width: window.innerWidth,  height: window.innerHeight });
    this.forceUpdate()
  }

    render(){
      let padRight = "3%"
      let padLeft = "3%"

        return(
        
         <div style={{backgroundColor:"#F4F4F4ac", minWidth:"100vw",minHeight:"10vh"}}>
            <Grid padding={0} container spacing={0}>
                <Grid  item xs={2} spacing={0} style={{paddingTop:1.5,}}>

                <NavLink to="/" >
                <img src={require('../images/logo.png')}width="100%" height="100%"/>
                </NavLink>

                </Grid> 
             <Grid item xs={this.state.width < 400 ? 2: 4} style={{}}></Grid>

            <Grid item xs={this.state.width < 400 ? 8 : 6} spacing={0}  justify="space-between"  >

          <div style={{ textAlign:"center", minWidth:"50vw", minHeight:"2vh", paddingTop:35}}> 
          <br/>
           
                      
            <NavLink exact className="Link" to="/" style={{paddingLeft:padLeft, paddingRight:padRight,}}> Home </NavLink>
              <span/>
            <NavLink  className="Link" to="/background" style={{paddingLeft:padLeft, paddingRight:padRight}}> Background</NavLink>

            <NavLink className="Link" to="/commitment" style={{paddingLeft:padLeft, paddingRight:padRight}}> Commitment</NavLink>
  
            <NavLink  className="Link" to="/services" style={{paddingLeft:padLeft, paddingRight:padRight}}>Services</NavLink>
                 
            <NavLink  className="Link" to="/quote" style={{paddingLeft:padLeft}}>Get Quote</NavLink>
          </div>

          </Grid>
          </Grid>
          <div style={{height: this.state.width < 950? 8: this.state.width < 1050 ? 5 : 2}}/>
       </div>
        )
    }
}

