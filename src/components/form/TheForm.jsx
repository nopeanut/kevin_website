import React from 'react'
import './theForm.css';

const TheForm = () => {
  return (
    <div className='the_form_main'>
        <h1>Get in touch</h1>
        <div className='the_form_input'>
            <form name = "contact-form" method = "POST" data-netlify = "true">
                <input type = "hidden" name = "form-name" value = "contact-form" />
                <div className='the_form_stuff'>
                    <div className='the_form_input_name'>
                        <label for="name">Name</label>
                        <input type = "text" placeholder = "enter your name" name = "name"/>
                    </div>
                    <div className='the_form_input_email'>
                        <label for="email">Email</label>
                        <input type = "text" placeholder = "enter your email" name = "email"/>
                    </div>
                    <div className='the_form_input_message'>
                        <label for="message">Message</label>
                        <textarea placeholder = "enter your message" name = "message"/>
                    </div>
                    <button type = "submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TheForm;