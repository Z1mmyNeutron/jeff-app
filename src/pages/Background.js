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


export default class Background extends React.Component{
    constructor(props){
        super(props)
        document.body.classList.add("Background");
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
        <div className="Background">
                <div style={{backgroundColor:"#F3F3F399", minWidth:1000}}>
                <Navbar/>
                <Grid padding={0} container spacing={0} style={{backgroundColor:"#F3F3F399"}}>
                    <Grid  item xs={5} spacing={0}>
                             <div style={{textAlign:"center", 
                                minHeight:"30vh",
                                position: 'relative', 
                                transform:"translate(0%," + ( this.state.width < 600 ? "0": this.state.width < 800 ? "10" : "20") + "%)"}}>
                        
                                <h2> All About Oxford Lithograph Co., Inc</h2>
                                <div style={{paddingLeft:75, paddingRight: 75}}>
                                    <h3><i> Our Background </i></h3>
                                    <p>   Oxford Lithograph was founded in 1970 as an off-shoot of what was then the largest combined lithograph and letter shop in New York. That was the basis for our present ability to handle projects from inception through printing, folding and binding, inserting and mailing.</p>
                                    <p>   As the printing industry evolves and technological advances consign yesterday’s systems to today’s dust heap, Oxford Lithograph has kept pace. Our in-house capabilities not only include traditional printing methods but also include the latest digital technologies for pre-press and printing.</p>
                                </div>
                           
                           </div>
                        </Grid> 
                     
                <Grid item xs={7} spacing={0} style={{ maxHeight:"60vh"}}>                
                    <img src={require('../images/Background.jpeg')}width="100%" height="100%"/>        
                        <br/>
                        <br/>
                        <br/>
                </Grid>      
             
            </Grid> 
            <div style={{minHeight:"10vh", backgroundColor:"#F3F3F399"}}/>
            </div>
      
       <div style={{minHeight:"20vh", backgroundColor:"#FFFFF00"}}/>
    </div>
        )
    }
}