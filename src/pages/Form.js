import React from 'react';
import axios from 'axios';

const inputStyle = {backgroundColor:"#00000000",
   border:"none", borderBottom:"solid", borderWidth:1, borderColor:"gray",
   width:"100%", paddingTop:10, marginLeft:10, minWidth:"5vh",
   fontSize:18,fontFamily:"minion-pro, serif", fontStyle: "italic",
   height:30, margin:0, padding: 0,
    }
const submitStyle = {
   backgroundColor:"black", width:"65%", 
   alignItems:"center",justifyContent:"center", 
   marginLeft:"16%", paddingTop:3, marginBottom:4,
   display:"flex", color:"white", height:"8.5%", minWidth:"5vw",
   fontSize:18,fontFamily:"minion-pro, serif"
}
//background photo


async function mail(message) {
   let to = "donotreplyoxfordlithograph@gmail.com"

 let url = "https://6dbawzp19e.execute-api.us-east-1.amazonaws.com/Beta/sendmail"
 
 let worked = true

 let response = await fetch(url, {
     method: 'POST',
     headers: { 
     'Accept': 'application/json',
     },
     body: JSON.stringify({
         
         To: String(to),
         Message: String(message)  ,

     }),
     }).then((response) => response.json()).then((responseJson) => {
         worked = true 
         return JSON.parse(responseJson)
   }).catch((e) => { 
         worked = false
         return e
   })

   return {success: worked, response: response }
}

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
           mailSent : false,
           currentError: ""
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
     
     
       

          if ( name == undefined || !(name.length >= 0 && /^[a-zA-Z\s]+$/.test(name))){
               this.setState({currentError:"Please enter a name"})
               return false
           }

           
     

           if (email == undefined || email.length<=0 || email.indexOf("@")==-1 ){
               this.setState({currentError: "Please enter a valid email"})
               return false
           }


           if( subject == undefined || subject.length<=0){
               this.setState({currentError:"Please enter a valid subject"})
               return false
           }

           if( quantity == undefined || quantity<=0){
               this.setState({currentError:"Please enter a valid quantity"})
               return false
           }

           //fixes error thrown by blank boxes
         

           if( size == undefined || size<0){
               this.setState({currentError:"Please enter a valid size"})
               return false
           }


           if(stock == undefined|| stock<0){
               this.setState({currentError:"Please enter a valid stock"})
               return false

           }

           if(pages == undefined || pages<0){
               this.setState({currentError:"Please enter a valid number of pages"})
               return false

           }
           if( finishing == undefined ||!(finishing.length>=0  )){
               this.setState({currentError:"Please enter your preferred finishing"})
               return false
           }

//allow submit button to work
           this.setState({currentError:""})
           return true

   }

//email message

       submit= async()=>{ 
           if(this.validateForm()){
             let message =(" Hi, \
                   \nMy name is " +  this.state.name + ",\n I can be contacted at: " + this.state.email + ".\n\nThe subject of this job is:" + this.state.subject 
                   +"\nHere are the details: "+
                   +"\nQuantity: " + this.state.quantity 
                   +"\nSize: " + this.state.size
                   +"\nStock: " + this.state.stock
                   +"\nPages: " + this.state.pages
                   +"\nFinishing: " + this.state.finishing); 
              
              let pop =  await mail(message);
              this.setState({mailSent:true})
               }
           }
  

   render(){
       return(
       <> {this.state.mailSent && (<p style={{fontSize:15, paddingLeft:10, paddingTop:"20%", lineHeight:1.5, paddingRight:10, fontFamily:"minion-pro, serif", alignItems:"center", justifyContent:"center" }}><i>Your message has been sent. Our team will get back to you shortly!</i></p>)}
           {!this.state.mailSent && (<div style={{height:"100%", minWidth:"20vw", marginLeft:"19%", marginRight:"10%", width:"55%", alignItems:"center", justifyContent:"center"}}>
               <br/>
                   
                   <div style={{height:"10%", width:"100%", alignItems:"center", justifyContent:"center", display: "inline" }}>
                   { this.state.currenterror != "" && <p style={{color:"red"}}>{this.state.currentError}</p>}
                   <input type="text" value={this.state.name} onChange={(e)=> this.changeName(e.target.value)} placeholder="Name:" 
                   style = {inputStyle}/>
                   </div>
                   
                   <div style={{height:"10%", paddingTop:25}}>
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

                   <div style={{height:"1%"}}>
                       
                   </div>
                    <button title="submit" onClick={this.submit}
                    style={submitStyle}>Submit</button>
                   
                
       </div> )}</>)
   }
}
   

