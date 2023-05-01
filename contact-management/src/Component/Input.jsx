import React from 'react'

function Input() {
  return (
    <div style={{width:"350px",margin:"auto",boxShadow:"0 0 10px black",height:"200px",padding:"40px",marginTop:"20px"}}>
        <h3>Redux</h3>
        <input  type="text" placeholder="Enter your Name"/>
        <br></br>
        <br></br>
        <button>Submit</button>
    </div>
  )
}

export default Input