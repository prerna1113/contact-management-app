import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
   <div>
    <h1 style={{width:"33%",margin:"auto",border:"1px solid black"
    ,marginBottom:"0px",color:"black",backgroundColor:"cyan"
    }}>Contact Page</h1>


<div style={{display:"flex",margin:"auto",width:"33%",height:"200px",
    border:"1px solid black",
    }}>
    
        <div style={{width:"25%",boxShadow:"0 0 10px black",}}>
           <br></br>
            <Link  to="/">Contact</Link>
            <br></br>
            <br></br>
            
            <Link to="Maps and charts">Maps & Charts</Link>
            <br></br>
            <br></br>
            <Link to ="sidebar">Sidebar</Link>
            </div>

            <div style={{width:"75%",marginTop:"2px"}}>
                <h3>Contact Screen</h3>
            </div>
       
    </div>
   </div>
  )
}

export default Nav