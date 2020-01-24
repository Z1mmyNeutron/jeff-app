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
        document.body.classList.add("GetQuote");
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
        <div style={{backgroundColor:"#F3F3F399"}}>
            <Navbar/>
        </div>
            
        <div style={{backgroundColor:"#F3F3F399", minWidth:1000}}>
            <Grid padding={0} container spacing={0}>
                <Grid item xs={7} spacing={0} style={{ maxHeight:"60vh",}}>           
                        <img src={require('../images/GetQuote.jpeg')}width="100%" height="100%"/>      
                        <br/>
                        <br/> 
                        <br/>
                        <br/>  
                </Grid>
                <Grid  item xs={5} spacing={0} style={{}}>
                    <div style={{textAlign:"center", paddingLeft:5, paddingRight:5,
                    position: 'relative', height:"7%",
                    fontFamily:"minion-pro, serif", }}>
                        <h2> Request A Quote</h2>
                        </div>
                        <div style={{marginLeft:85, marginRight: 50, backgroundColor:"#FFFB",
                        height:"85.3%", display:"flex" }}>
                           <Form/>
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