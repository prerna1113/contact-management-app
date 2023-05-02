import React from 'react'
import {useSelector} from 'react-redux'
import reduxstore from './Store';

function Contact() {
   const data= useSelector((storedata)=>{
        return storedata;
    })
  return (
    <div>
       <h1>contact</h1>
       <h2>{data}</h2>
    </div>
  )
}

export default Contact;