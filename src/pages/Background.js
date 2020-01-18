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
    render(){
        return(
        <div className="Background">
        <div style={{backgroundColor:"#49494988"}}>
            <Navbar/>
        </div>
            <div style={{backgroundColor:"#FFFFF00", minWidth:"50vw", minHeight:"50vh"}}>
            <Grid padding={0} container spacing={0}>
                <Grid  item xs={5} spacing={0} style={{backgroundColor:"#DDDDDD99"}}>
                    <div style={{textAlign:"center", paddingLeft:5, paddingRight:5, 
                    position: 'relative', top: '45%', transform: 'translate(0%, -50%)', 
                    fontFamily:"minion-pro, serif"}}>
                        <h2> All About Oxford Lithograph Co., Inc</h2>
                        <div style={{paddingLeft:75, paddingRight: 75}}>
                            <h3><i> Our Background </i></h3>
                            <p style={{lineHeight:1.3}}>   Oxford Lithograph was founded in 1970 as an off-shoot of what was then the largest combined lithograph and letter shop in New York. That was the basis for our present ability to handle projects from inception through printing, folding and binding, inserting and mailing.</p>
                            <p style={{lineHeight:1.3}}>   As the printing industry evolves and technological advances consign yesterday’s systems to today’s dust heap, Oxford Lithograph has kept pace. Our in-house capabilities not only include traditional printing methods but also include the latest digital
technologies for pre-press and printing.</p>
                        </div>
                    </div>

                </Grid> 
           
        <Grid item xs={7} spacing={0} style={{backgroundColor:"#DDDDDD99"}}>
                             
     <img src={require('../images/Background.jpeg')}width="100%" height="auto"/>        
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