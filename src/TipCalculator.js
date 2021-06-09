import React from 'react';
export default class TipCalculator extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Bill:'',
            type:'',
            people:''
        }
    }
    Temp=(event)=>{
        this.setState({
            Bill:Number(event.target.value)
        })
    }
    Type=(event)=>{
        this.setState({
            type:event.target.value
        })
    }
    People=(event)=>{
        this.setState({
            people:event.target.value
        })
    }
    all=(event)=>{
        var select=document.getElementById("select box");
         var Rating=select.options[select.selectedIndex].value;
        if(isNaN(this.state.Bill))
{
document.writeln("please enter valid no");
}
else
{
var Totaltip=(Rating*this.state.Bill)/100;

var Total=this.state.Bill+Totaltip;

var Billperperson=(Total)/(this.state.people);
Totaltip='$'+Totaltip;
Billperperson='$'+Billperperson;
        document.getElementsByName('Totaltip')[0].value=Totaltip;
        document.getElementsByName('Billperperson ')[0].value=Billperperson ;
}
    }
    render(){
        return(
                <div>
                    <h1 style={{fontSize:'70px',color:'coral'}}>TipCalculator</h1>
                    <label style={{fontSize:'20px',color:'blue'}}>How much is your bill?</label>
                    <div><label>${" "}</label><input value={this.state.temprature} onChange={this.Temp} style={{border:'1px solid black'}}placeholder="           "/></div>
                          &nbsp;
                          <div><label style={{fontSize:'20px',color:'blue'}}>How much your service?</label> </div>
                          <div>
                              <select id='select box' style={{fontSize:'20px',color:'coral',padding:'10px',border:'1px solid black'}}>
                              <option value="30">30%-outstanding</option>
                              <option value="20">20%-Good</option>
                               <option value="15">15%-Ok</option>
                               <option value="10">10%-Bad</option>
                                <option value="5">5%-Terrible</option>
                                  </select>  
                          </div>
                          &nbsp;
                          <div><label style={{fontSize:'20px',color:'blue'}}>How many people sharing the bill?</label></div>
                          <div>
                          <input value={this.state.people} onChange={this.People} style={{border:'1px solid black'}} placeholder="         "/><label>People</label></div>
                          &nbsp;
                          <div><button  onClick={this.all} style={{fontSize:'20px',color:'coral',border:'1px solid black'}}>Calculate</button></div>
                          &nbsp;
                            <div>
                          <label for="displayValue" style={{fontSize:'20px',color:'blue'}}>Totaltip: </label><input type="textbox" style={{border:'1px solid black'}} name="Totaltip"/>
                          &nbsp; &nbsp; &nbsp;
                          <label for="displayValue" style={{fontSize:'20px',color:'blue'}} >Billperperson: </label><input type="textbox" style={{border:'1px solid black'}} name="Billperperson "/>
                           </div>
                </div>
        )
    }
}