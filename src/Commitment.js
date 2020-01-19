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
    constructor(props){
        super(props)

        this.state = {width: 0, height: 0}
    }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener("resize", this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions = () => {
    this.setState({  width: window.innerWidth });
    this.forceUpdate()
  }
    render(){

        let percent
        if(this.state.width < 300){
            percent = "0"
        } else{
            percent = "10"
        }

        return(
        <div className="Commitment">
            <Navbar/>
            <div style={{backgroundColor:"#F3F3F399", minWidth:1000}}>
            <Grid padding={0} container spacing={0}>
            <Grid item xs={7} spacing={0} style={{backgroundColor:"#F3F3F399", maxHeight:"60vh"}}>           
                    <img src={require('../images/Commitment.jpeg')}width="100%" height="100%"/>      
                    <br/>
                    <br/> 
                    <br/>
                    <br/>  
            </Grid>
                <Grid  item xs={5} spacing={0} style={{backgroundColor:"#F3F3F399"}}>
                    <div style={{ textAlign:"center", 
                    position: 'relative', 
                    fontFamily:"minion-pro, serif", 
                    minHeight:"30vh",
                    transform:"translate(0%," + ( this.state.width < 600 ? "0": this.state.width < 800 ? "10" : "20") + "%)"}}>
                        <h2> All About Oxford Lithograph Co., Inc</h2>
                        <div style={{paddingLeft:75, paddingRight: 75}}>
                            <h3><i> Our Commitment </i></h3>
                            <p style={{fontSize:14, lineHeight:1.3}}>   We pride ourselves in giving clients the two things that are most import to them (and to us) - QUALITY and SERVICE! We’ve all heard the saying “there’s never time to do it right the first time, but there’s always time to do it over.”</p>
                            <p style={{fontSize:14, lineHeight:1.3}}>   Paying attention to the details assures clients of our commitment to Quality. As for Service, we have worked through the night and weekends to meet a delivery requirement that others had thought could not be done.</p>
                            <p style={{fontSize:14, lineHeight:1.3}}>   So, if you want Quality Printing and Outstanding Service at Competitive Prices, look no further than Oxford Lithograph.</p>
                        </div>
                    </div>

                </Grid> 
           
    
             </Grid>
           
       </div>

       <div style={{minHeight:"10vh", backgroundColor:"#F3F3F399"}}/>
       <div style={{minHeight:"20vh", backgroundColor:"#FFFFF00"}}/>
    </div>
        )
    }
}
