import React from "react"
import Grid from '@material-ui/core/Grid'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import Navbar from './Navbar.js'
import Form from "./Form.js"
import "./backdrop.css"


export default class GetQuote extends React.Component{
    render(){
        return(
        <div className="GetQuote">
            <Navbar/>
            <div style={{backgroundColor:"#FFFFF00"}}>
            <Grid padding={0} container spacing={0}>
            <Grid item xs={7} spacing={0} style={{backgroundColor:"#DDDDDD99"}}>           
                    <img src={require('../images/GetQuote.jpeg')}width="100%" height="90%"/>      
                    <br/>
                    <br/> 
                    <br/>
                    <br/>  
            </Grid>
                <Grid  item xs={5} spacing={0} style={{backgroundColor:"#DDDDDD99"}}>
                    <div style={{textAlign:"center", paddingLeft:5, paddingRight:5, 
                    position: 'relative', height:"10%",
                    fontFamily:"minion-pro, serif", }}>
                        <h1> Request A Quote</h1>
                        </div>
                        <div style={{marginLeft:60, marginRight: 60, backgroundColor:"#FFFB",
                        height:"76.3%", display:"flex" }}>
                           <Form/>
                         
                            </div>
                    

                </Grid> 
           
    
             </Grid>
           
       </div>
    </div>
        )
    }
}