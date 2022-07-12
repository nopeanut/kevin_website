import React from 'react'

const NewForm = () => {
  return (
    <div>
        <form name = "contact v1" method = "post" data-netlify = "true" onSubmit = "submit">
            <input type = "hidden" name = "form-name" value = "contact v1" />
            <div>
                <label> First name <br />
                    <input type = "text" name = "first-name" />
                </label>
            </div>
            <div>
                <label>Email</label> <br/>
                <input id = "email" type = "email" name = "email"/>
            </div>

            <div>
                <label>Any comments? <br/>
                    <textarea name = "comments"/>
                </label>
            </div>
            <button type = " submit">Submit the button</button>
        </form>
    </div>
  )
}

export default NewForm