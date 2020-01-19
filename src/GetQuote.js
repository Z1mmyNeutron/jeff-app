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
        <div className="GetQuote">
        <div>
            <Navbar/>
        </div>
            
        <div style={{backgroundColor:"#DDDDDD99", minWidth:1000}}>
            <Grid padding={0} container spacing={0}>
                <Grid item xs={7} spacing={0} style={{backgroundColor:"#DDDDDD99"}}>           
                        <img src={require('../images/GetQuote.jpeg')}width="100%" height="100%"/>      
                        <br/>
                        <br/> 
                        <br/>
                        <br/>  
                </Grid>
                <Grid  item xs={5} spacing={0} style={{}}>
                    <div style={{textAlign:"center", paddingLeft:5, paddingRight:5, 
                    position: 'relative', height:"10%",
                    fontFamily:"minion-pro, serif", }}>
                        <h1> Request A Quote</h1>
                        </div>
                        <div style={{marginLeft:60, marginRight: 60, backgroundColor:"#FFFB",
                        height:"84.3%", display:"flex" }}>
                           <Form/>
                            <></>
                            </div>
                    

                </Grid> 
           
    
             </Grid>
           
       </div>
       <div style={{minHeight:"10vh", backgroundColor:"#DDDDDD99"}}/>
       <div style={{minHeight:"20vh", backgroundColor:"#DDDDDD00"}}/>
    </div>
        )
    }
}