import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{

state={

        color:''
}


btnclick(e){

   let value=this.inp.value;
   this.setState({color:value})


}





render(){
   

return (<div className="container" style={{paddingTop:'100px'}}>

<div className="row">
<div className="col-lg-6 col-md-6" style={{height:'160px',border:'1px solid black',background:`${this.state.color}`}}></div>

<div className="col-lg-6 col-md-6" style={{height:'160px',paddingTop:'60px'}}>

<div className="form-group">

<input type="text" name="color" className="form-control" ref={(node)=>this.inp=node}  placeholder={this.props.color}/>

</div>

</div>
</div>

<div className="row" style={{marginTop:'70px',textAlign:'center',paddingLeft:'50%'}}>

<button type="button" className="btn btn-primary" onClick={this.btnclick.bind(this)}>show</button>

</div>



</div>)



}



}





App.defaultProps={color:"please enter color"}



export default App;