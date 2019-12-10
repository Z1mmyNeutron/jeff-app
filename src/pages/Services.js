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


export default class Services extends React.Component{
    render(){
        return(
        <div className="Services">
        <div style={{backgroundColor:"#FFFFFFBB"}}>
            <Navbar/>
        </div>
            <div style={{backgroundColor:"#FFFFF00"}}>
            <Grid padding={0} container spacing={0}>
                <Grid  item xs={5} spacing={0} style={{backgroundColor:"#DDDDDD99"}}>


                    <div style={{textAlign:"center", paddingLeft:5, paddingRight:5, 
                    position: 'relative', top: '35%', transform: 'translate(0%, -50%)', 
                    fontFamily:"minion-pro, serif"}}>
                        <h2> All About Oxford Lithograph Co., Inc</h2>
                        <div style={{paddingLeft:75, paddingRight: 75}}>
                            <h3><i> What We offer</i></h3>
                            </div>
                     <Grid padding={0} container spacing={0}>
                         <Grid item xs={2}/>
                <Grid  item xs={4} spacing={0} style={{backgroundColor:"#DDDDDD99"}}>
                    <div style ={{textAlign: "left",fontSize:14,  fontFamily:"minion-pro, serif"}}>
                                <li style={{paddingBottom:5}}> Creative services</li>
                                <li style={{paddingBottom:5}}> Offset printing</li>
                                <li style={{paddingBottom:5}}> Scanning</li>
                                <li style={{paddingBottom:5}}> Digital Color Printing</li>
                                <li style={{paddingBottom:5}}>Corporate Image Services</li>
                                <li style={{paddingBottom:5}}>Tabs</li>
                                <li style={{paddingBottom:5}}>Stamping/Embossing</li>
                            </div>
            </Grid><Grid  item xs={5} spacing={0} style={{backgroundColor:"#DDDDDD99"}}>
            
            <div style ={{textAlign: "left",fontSize:14,  fontFamily:"minion-pro, serif"}}>
                                <li style={{paddingBottom:5}}> Blueprint Reproduction</li>
                                <li style={{paddingBottom:5}}> Large Format Color</li>
                                <li style={{paddingBottom:5}}> Variable Data</li>
                                <li style={{paddingBottom:5}}> Mounting</li>
                                <li style={{paddingBottom:5}}> Laminating</li>
                                <li style={{paddingBottom:5}}> Large Project Management</li>
                                <li style={{paddingBottom:5}}> Binding</li></div>
                                </Grid>
            </Grid>
                     
                     
                            </div>
                </Grid> 

           
        <Grid item xs={7} spacing={0} style={{backgroundColor:"#DDDDDD99"}}>
                             
     <img src={require('../images/Services.jpeg')}width="100%" height="auto"/>        
        <br/>
        <br/>
        <br/>
        <br/>
        
                 </Grid>
             </Grid>
           
       </div>
    </div>
        )
    }
}