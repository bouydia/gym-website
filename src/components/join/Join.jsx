import React,{ useRef }  from 'react'
import emailjs from '@emailjs/browser'
import './join.css'

const Join = () => {
  const form = useRef();
   const sendEmail = e => {
     e.preventDefault()

     emailjs
       .sendForm(
         'service_v0jyd3u',
         'template_xsmd5dp',
         form.current,
         'pV3R-4aTEXW0hSiRy'
       )
       .then(
         result => {
           console.log(result.text)
         },
         error => {
           console.log(error.text)
         }
       )
   }
  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <div />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} onSubmit={sendEmail} className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address here"
          />
          <button className="btn bt-join">join now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
