import {useState} from 'react'
import nameaction from './Action'

function Input() {
  const [state,setState]=useState("");
  const sendData=()=>{
    nameaction()

  }
  return (
    <div style={{width:"350px",margin:"auto",boxShadow:"0 0 10px black",height:"200px",padding:"40px",marginTop:"20px"}}>
        <h3>Redux</h3>
        <input  type="text" placeholder="Enter your Name" onChange={(e)=>{setState(e.target.value)}}/>
        <br></br>
        <br></br>
        <button onClick={sendData}>Submit</button>
    </div>
  )
}

export default Input