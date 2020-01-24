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


export default class Home extends React.Component{

    constructor(props){
        super(props)
        document.body.classList.add("Home");
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
        <div className="Home">
            <div style={{backgroundColor:"#FFFFFF99"}}>
                <Navbar/>
            </div> 
                    <div style={{backgroundColor:"#FFFFF99", minWidth:1000}}>
                        <Grid padding={0} container spacing={0}>
                            <Grid  item xs={5} spacing={0} style={{paddingLeft:25}}>
                                <div style={{textAlign:"center", 
                                    position: 'relative', 
                                    top:"20%",
                                    minHeight:"30vh",
                                    transform:"translate(0%," + ( this.state.width < 600 ? "0": this.state.width < 800 ? "10" : "20") + "%)"}}>
                                        <h1> Oxford Lithograph Co., Inc</h1>
                                        <div style={{paddingLeft:75, paddingRight: 75}}>
                                            <p>    is your source for Quality Offset and Digital printing services. By incorporating “traditional” and the newest “digital” technologies, we pride ourselves in getting jobs done on a timely basis. </p>
                                            <p>    Whether it’s for a same-day presentation, a financial report or a complex brochure, our printing specialists know how to get things accomplished.</p>
                                            <p>    We offer a wide range of services including b/w and color digital reproduction, variable on-demand digital and offset printing, mailing and fulfillment, and custom graphic design services to complete us as a one-stop solution provider.</p>
                                        </div>
                                </div>
                            </Grid> 

                            <Grid item xs={7} spacing={0} style={{maxHeight:"60vh"}}>                      
                                <img src={require('../images/Eye.jpeg')}width="100%" height="auto"/>        
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    
                            </Grid>
                    </Grid>
           
        </div>
        <div style={{minHeight:"10vh", backgroundColor:"#FFFFFF99"}}/>
    
    </div>  
        )
    }
}