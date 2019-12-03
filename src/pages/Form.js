import React from 'react'
export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
            
        }
        this.handleChange = () => this.handleChange; 
        
    }

    render(){
        return(
            <div style={{height:"100%"}}>
                    <div style={{height:"10%"}}>
                        <label>
                             Name:
                            <textarea value={this.state.value} onChange={this.handleChange}/>
                         </label>
                         <input type="text" value="Name" />
                    </div>
                    
                    <div style={{height:"10%"}}>
                        <label>
                             Email:
                            <textarea value={this.state.value} onChange={this.handleChange}/>
                        </label>
                        <input type="text" value="Email Address" />
                    </div>     

                    <div style={{height:"10%"}}>
                            <label>
                                Subject
                                 <textarea value={this.state.value} onChange={this.handleChange}/>
                            </label>
                             <input type="text" value="Subject" />
                    </div>
                    <div style={{height:"10%"}}>
                        <label>
                             Quantity:
                            <textarea value={this.state.value} onChange={this.handleChange}/>
                        </label>
                    <input type="text" value="Quantity" />
                    </div>  

                    <div style={{height:"10%"}}>
                        <label>
                            Size:
                            <textarea value={this.state.value} onChange={this.handleChange}/>
                        </label>
                    <input type="text" value="Size"/>
                    </div>  

                     <div style={{height:"10%"}}>
                        <label>
                            Stock:
                            <textarea value={this.state.value} onChange={this.handleChange}/>
                        </label>
                    <input type="text" value="Stock"/>
                    </div>  
                    <div style={{height:"10%"}}>
                        <label>
                            Pages:
                            <textarea value={this.state.value} onChange={this.handleChange}/>
                        </label>
                    <input type="text" value="Pages"/>
                    </div>  
                    <div style={{height:"10%"}}>
                        <label>
                            Finishing:
                            <textarea value={this.state.value} onChange={this.handleChange}/>
                        </label>
                    <input type="text" value="Finishing"/>
                    </div>  
            </div>
        )
    }
}