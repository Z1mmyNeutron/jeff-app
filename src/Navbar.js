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
    render(){
      let padRight = 15
      let padLeft = 15
        return(
        
         <div style={{backgroundColor:"#F4F4F4ac"}}>
            <Grid padding={0} container spacing={0}>
                <Grid  item xs={2} spacing={0} style={{}}>
                <img src={require('./images/logo.png')}width="100%"/>


                </Grid> 
             <Grid item xs={4} style={{}}></Grid>

            <Grid item xs={6} spacing={0} direction="column" justify="space-between">

          <div style={{ textAlign:"center" }}> 
          <br/>
          <br/>
          <br/>  
                      
            <NavLink exact className="Link" to="/" style={{paddingRight:padRight,}}> Home </NavLink>
              <span/>
            <NavLink  className="Link" to="/background" style={{paddingLeft:padLeft, paddingRight:padRight}}> Background</NavLink>

            <NavLink className="Link" to="/commitment" style={{paddingLeft:padLeft, paddingRight:padRight}}> Commitment</NavLink>
  
            <NavLink  className="Link" to="/services" style={{paddingLeft:padLeft, paddingRight:padRight}}>Services</NavLink>
                 
            <NavLink  className="Link" to="/quote" style={{paddingLeft:padLeft}}>Get Quote</NavLink>
          </div>

          </Grid>
          </Grid>
           
       </div>
        )
    }
}