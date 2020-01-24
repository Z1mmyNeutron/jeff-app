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


export default class Services extends React.Component{

    constructor(props){
        super(props)
        document.body.classList.add("Services");
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
        <div className="Services">
        <div style={{backgroundColor:"#FFFFFF99"}}>
            <Navbar/>
        </div>
            <div style={{backgroundColor:"#FFFFFF99", minWidth:1000}}>
            <Grid padding={0} container spacing={0}>
                <Grid  item xs={6} spacing={0}>
                    <div style={{textAlign:"center", 
                    position: 'relative', 
                    fontFamily:"minion-pro, serif", minHeight:"30vh",
                    transform:"translate(0%," + ( this.state.width < 600 ? "0": this.state.width < 800 ? "10" : "20") + "%)"}}>

                        <h2 style={{fontSize:30}}> All About Oxford Lithograph Co., Inc</h2>
                        <div style={{paddingLeft:55, paddingRight: 55}}>
                            <h3 style={{fontSize:22}}><i> What We offer</i></h3>
                            </div>
                     <Grid padding={0} container spacing={0}>
                         <Grid item xs={1}/>

                <Grid  item xs={4} spacing={0} >
                    <div style ={{textAlign: "left",fontSize:14, lineHeight:1.5, paddingLeft:"40%", fontFamily:"minion-pro, serif", width:"25%", minWidth:"25vw"}}>
                                <li style={{paddingBottom:5}}>Creative services</li>
                                <li style={{paddingBottom:5}}>Offset printing</li>
                                <li style={{paddingBottom:5}}>Scanning</li>
                                <li style={{paddingBottom:5}}>Digital Color Printing</li>
                                <li style={{paddingBottom:5}}>Corporate Image Services</li>
                                <li style={{paddingBottom:5}}>Tabs</li>
                                <li style={{paddingBottom:5}}>Stamping/Embossing</li>
                            </div>
                 </Grid>

                        <Grid  item xs={1} spacing={0} ></Grid>

                    <Grid  item xs={5} spacing={0} >
                         <div style ={{textAlign: "left",fontSize:14, lineHeight:1.5, fontFamily:"minion-pro, serif", width:"25%", paddingLeft:"20%", paddingRight:"15%", minWidth:"25vw"}}>
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

           
        <Grid item xs={6} spacing={0} style={{ maxHeight:"60vh"}}>
            <div>                           
                <img src={require('../images/Services.jpeg')}width="100%" height="100%" />        
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                
            </div>     
        </Grid>
    </Grid>
     
       </div>
       <div style={{minHeight:"10vh", backgroundColor:"#FFFFFF99"}}/>
       <div style={{minHeight:"20vh", backgroundColor:"#DDDDDD00"}}/>
    </div>
        )
    }
}