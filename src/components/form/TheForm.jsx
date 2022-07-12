import React from 'react'
import './theForm.css';
import Form from 'react-bootstrap/Form';

const TheForm = () => {
  return (
    <div className='the_form_main'>
        <h1>Get in touch</h1>
        <div class="the_form_input">
            <Form method="POST" data-netlify="true">
                <div className='the_form_stuff'>
                    <div className='the_form_input_name'>
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder=""/>
                    </div>
                    <div className='the_form_input_email'>
                        <label for="email">Email</label>
                        <input type="text" id="email" name="name" placeholder="" />
                    </div>
                    <div className='the_form_input_message'>
                        <label for="message">Message</label>
                        <textarea id="message" name="message" placeholder=""/>
                    </div>
                    <div className='the_form_input_button'>
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default TheForm;