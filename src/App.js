import React, { useState, useEffect } from "react";

import './App.css';

function App() {
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [emailAddress, setEmailAddress] = useState("")
const [message, setMessage] = useState("")

const [isSubmitted, setIsSubmitted] = useState(false)

console.log(firstName)



  async function handleSubmit(event) {
    event.preventDefault()
   let response = await fetch('http://localhost:5000', {
      headers: { "content-type": "application/json" }, //THIS IS REQUIRED 8D!!!
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        emailAddress,
        message
      })
    })
    console.log(response)
  }


  return (
<>
<form onSubmit = {handleSubmit}>
<input type = "text" name = "firstName" id = "first-name" onChange = {(event)=> {setFirstName(event.target.value)}} />
<input type = "text" name = "lastName" id = "last-name" onChange = {(event)=> {setLastName(event.target.value)}}/>
<input type = "text" name = "emailAddress" id = "email-address" onChange = {(event)=> {setEmailAddress(event.target.value)}}  />
<input type = "text" name = "message" id = "message" onChange = {(event)=> {setMessage(event.target.value)}} />
<button type = "submit">Submit!</button>
  
</form> 

</>
  );
}

export default App;
