import React ,{Component}from 'react';
import { render } from "react-dom";
import Modal from "./lib";

class App extends Component {
  state={
    open:false
  }
  toggleState=()=>{
    this.setState(prevState=>({open:!prevState.open}))
  }
  render(){
    return(
      <div style={{ width: 640, margin: "15px auto" }}>
      <h1>Hello React</h1>
      <button onClick={this.toggleState}>Open Modal</button>
      <Modal open={this.state.open} onCloseClicked={this.toggleState} onBackDropClicked={this.toggleState}><h1>Hellox</h1></Modal>
    </div>
    )
  }
}
 

render(<App />, document.getElementById("root"));
