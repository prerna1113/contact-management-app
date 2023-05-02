import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div style={{display:"flex",margin:"auto",padding:"20px",width:"30%",height:"200px",
    border:"1px solid black",marginTop:"30px"
    }}>
        <div style={{border:"2px solid black",width:"25%"}}>
            <br></br>
            <Link to="/">Contact</Link>
            <br></br>
            <br></br>
            
            <Link to="Maps and charts">Maps & Charts</Link>
            <br></br>
            <br></br>
            <Link to ="sidebar">Sidebar</Link>
            </div>

            <div style={{border:"2px solid red",width:"75%"}}>
                <h1>Contact Screen</h1>
            </div>
       
    </div>
  )
}

export default Nav