import React from 'react'
import './theForm.css';

const TheForm = () => {
  return (
    <div className='the_form_main'>
        <h1>Get in touch</h1>
        <div class="the_form_input">
            <form name = "contact1" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact1"/>
                <div className='the_form_stuff'>
                    <div className='the_form_input_name'>
                        <label for="name">Name</label>
                        <input type="text" name="name" placeholder=""/>
                    </div>
                    <div className='the_form_input_email'>
                        <label for="email">Email</label>
                        <input type="text" name="email" placeholder="" />
                    </div>
                    <div className='the_form_input_message'>
                        <label for="message">Message</label>
                        <textarea name="message" placeholder=""/>
                    </div>
                    <div className='the_form_input_button'>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TheForm;