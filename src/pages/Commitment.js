import React from "react"
import Grid from '@material-ui/core/Grid'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import Navbar from './Navbar.js'
import "./backdrop.css"


export default class Commitment extends React.Component{
    render(){
        return(
        <div className="Commitment">
            <Navbar/>
            <div style={{backgroundColor:"#FFFFF00"}}>
            <Grid padding={0} container spacing={0}>
            <Grid item xs={7} spacing={0} style={{backgroundColor:"#F3F3F399"}}>           
                    <img src={require('../images/Commitment.jpeg')}width="100%" height="auto"/>      
                    <br/>
                    <br/> 
                    <br/>
                    <br/>  
            </Grid>
                <Grid  item xs={5} spacing={0} style={{backgroundColor:"#F3F3F399"}}>
                    <div style={{textAlign:"center", paddingLeft:5, paddingRight:5, 
                    position: 'relative', top: '45%', transform: 'translate(0%, -50%)', 
                    fontFamily:"minion-pro, serif"}}>
                        <h2> All About Oxford Lithograph Co., Inc</h2>
                        <div style={{paddingLeft:75, paddingRight: 75}}>
                            <h4><i> Our Commitment </i></h4>
                            <p style={{fontSize:14, lineHeight:1.3}}>   We pride ourselves in giving clients the two things that are most import to them (and to us) - QUALITY and SERVICE! We’ve all heard the saying “there’s never time to do it right the first time, but there’s always time to do it over.”</p>
                            <p style={{fontSize:14, lineHeight:1.3}}>   Paying attention to the details assures clients of our commitment to Quality. As for Service, we have worked through the night and weekends to meet a delivery requirement that others had thought could not be done.</p>
                            <p style={{fontSize:14, lineHeight:1.3}}>   So, if you want Quality Printing and Outstanding Service at Competitive Prices, look no further than Oxford Lithograph.</p>
                        </div>
                    </div>

                </Grid> 
           
    
             </Grid>
           
       </div>
    </div>
        )
    }
}
