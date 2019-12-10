import React from "react"
import Grid from '@material-ui/core/Grid'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import Navbar from '../Navbar.js'
import "./backdrop.css"


export default class Home extends React.Component{
    render(){
        return(
        <>
        <div style={{backgroundColor:"#FFFFFFBB"}}>
            <Navbar/>
        </div>  
        <div className="Home">
            <div style={{backgroundColor:"#FFFFF00", borderWidth:4}}>
            <Grid padding={0} container spacing={0}>
                <Grid  item xs={5} spacing={0} style={{}}>
                    <div style={{textAlign:"center", paddingLeft:5, paddingRight:5, 
                    position: 'relative', top: '45%', transform: 'translate(0%, -50%)', 
                    fontFamily:"minion-pro, serif"}}>
                        <h1> Oxford Lithograph Co., Inc</h1>
                        <div style={{paddingLeft:75, paddingRight: 75}}>
                            <p style={{lineHeight:1.3}}>    is your source for Quality Offset and Digital printing services. By incorporating “traditional” and the newest “digital” technologies, we pride ourselves in getting jobs done on a timely basis. </p>
                            <p style={{lineHeight:1.3}}>    Whether it’s for a same-day presentation, a financial report or a complex brochure, our printing specialists know how to get things accomplished.</p>
                            <p style={{lineHeight:1.3}}>    We offer a wide range of services including b/w and color digital reproduction, variable on-demand digital and offset printing, mailing and fulfillment, and custom graphic design services to complete us as a one-stop solution provider.</p>
                        </div>
                    </div>

                </Grid> 
           
        <Grid item xs={7} spacing={0} style={{}}>
                             
     <img src={require('../images/Eye.jpeg')}width="100%" height="auto"/>        
        <br/>
        <br/>
        <br/>
        <br/>
        
                 </Grid>
             </Grid>
           
       </div>
    </div>
      </>  
        )
    }
}