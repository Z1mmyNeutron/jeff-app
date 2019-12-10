 import React from 'react';
 
 import axios from 'axios';

const API_PATH = 'http://localhost:3000/react-jeff-app/public/api/index.php';
const inputStyle = {backgroundColor:"#00000000",
    border:"none", borderBottom:"solid", borderWidth:1, borderColor:"gray",
    width:"100%", paddingTop:5, marginLeft:10,
    fontSize:14,fontFamily:"minion-pro, serif", fontStyle: "italic",
    height:"auto", margin:0, padding: 0,
     }
const submitStyle = {
    backgroundColor:"black", width:"70%", 
    alignItems:"center",justifyContent:"center", 
    marginLeft:50, paddingTop:5,
    display:"flex", color:"white", height:"6%",
    fontSize:18,fontFamily:"minion-pro, serif"
}
//background photo


export default class Form extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            value: "",
            name: "",
            email: " ",
            quantity: "",
            subject: "",
            Size: 0,
            Stock: 0, 
            Pages: 0,
            Finishing: "",
            
        
        }   
    }

    changeName=(val)=>{
       if ((val.length < 25 && /^[a-zA-Z\s]+$/.test(val)) || val == "") {
            this.setState({name:val})
         }
    }

    changeEmail=(val)=>{this.setState({email:val})}

    changeSubject=(val)=>{
          if ((val.length < 30 && /^[a-zA-Z\s0-9]+$/.test(val)) || val == "") {
            this.setState({subject:val})}
         }
        
    changeFinishing=(val)=>{this.setState({finishing:val})

     }

    changeQuantity=(val)=>{ 
        if(val >= 0 ){
            this.setState({quantity:val})
            }
    }
    changeSize=(val) => { 
        if(val >= 0 ){
            this.setState({size:val})
        }
    }
    changeStock=(val)=>{ 
        if(val >= 0 ){
            this.setState({stock:val})
        }
    }
     changePages=(val) => { 
        if(val >= 0 ){
            this.setState({pages:val})
        }
    }
   
     
          
 //returns true if everything in the form is filled out
   validateForm=()=>{
      let name=this.state.name 
      let email=this.state.email
      let subject=this.state.subject
      let quantity=this.state.quantity
      let size = this.state.size
      let stock = this.state.stock
      let pages = this.state.pages
      let finishing = this.state.finishing
      

           if (!(name.length <= 0 && /^[a-zA-Z\s]+$/.test( name) && name.length<=0)){
                return false
            }
            if(!(finishing.length<=0 && /^[a-zA-Z\s]+$/.test( finishing) && finishing.length>=0)){
                return false
            }

            if (email.length<=0 || email.indexOf("@")==-1 ){
                return false
            }
            if(subject.length<=0){
                return false
            }
            if(quantity<0){
                return false
            }
            if(size<0){
                return false
            }
            if(stock<0){
                return false
            }
            if(pages<0){
                return false
            }
            
//allow submit button to work
            return true

    }




     
//email message

        submit=()=>{
            if(this.validateForm()){
              let message =(" Hi, \
                 My name is " +  this.state.name + ", and i can be contacted at: " + this.state.email + ".\n\nThe subject of this job is:" + this.state.subject 
                    +"Here are the details: "+this.state.details
                    +"Quantity: " + this.state.quantity 
                    +"Size: " + this.state.size
                    +"Stock: " + this.state.stock
                    +"Pages: " + this.state.pages
                    +"Finishing: " + this.state.finishing)

           /* axios({
            method: "post",
            url: `${process.env.REACT_APP_API}`,
            headers: { "content-type": "application/json"},
            data: this.state
    })
 */
 }

 }
   

    render(){
        return(
        
            <div style={{height:"100%",  marginLeft:"10%", marginRight:"10%", width:"90%",}}>
                <br/>
                    <div style={{height:"10%", width:"100%", alignItems:"center", justifyContent:"center", display: "inline" }}>

                        
                
        
                    <input type="text" value={this.state.name} onChange={(e)=> this.changeName(e.target.value)} placeholder="Name:" 
                    style = {inputStyle}/>
            
                        

                    </div>
                    
                    <div style={{height:"10%", width:"100%", paddingTop:20}}>
                         
                    
                    <input type="email" id="email" value={this.state.email} onChange={(e)=> this.changeEmail(e.target.value)} placeholder="Email:"
                    style={inputStyle}/>
                    </div>     

                    <div style={{height:"10%"}}>
                    
                                
                    <input type="text" value={this.state.subject} onChange={(e)=>this.changeSubject(e.target.value)} placeholder="Subject:" 
                    style={inputStyle}/>
                            
                    </div>
                    <div style={{height:"10%"}}>
                     
                    <input type="number"  value={this.state.quantity} onChange={(e)=>this.changeQuantity(e.target.value)} placeholder="Quantity:" 
                     style={inputStyle} />
                    </div>  

                    <div style={{height:"10%"}}>
                     
                    <input type="number" value={this.state.size} onChange={(e)=>this.changeSize(e.target.value)} placeholder="Size:"
                     style={inputStyle} />
                    </div>  

                     <div style={{height:"10%"}}>
                        
                    <input type="number" value={this.state.stock} onChange={(e)=>this.changeStock(e.target.value)} placeholder="Stock:"
                     style={inputStyle}/>
                    </div>  
                    <div style={{height:"10%"}}>
                    
                    <input type="number" value={this.state.pages} onChange={(e)=>this.changePages(e.target.value)} placeholder="Pages:"
                     style={inputStyle}/>
                    </div>  
                    <div style={{height:"10%"}}>
                      
                    <input type="text" value={this.state.finishing} onChange={(e)=>this.changeFinishing(e.target.value)} placeholder="Finishing:"
                     style={inputStyle}/>
                    
                   
                    </div>  

                     <button title="submit" onClick={(e)=>this.submit()}
                     style={submitStyle}>Submit</button>
            </div>
        )
    }
}
    

