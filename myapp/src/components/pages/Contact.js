import React from "react";


export default function Contact() {
    return (
        <div className='contain'>
            <h1>Contact</h1>
            <p>
                Feel free to message for any questions. 
            </p>
            <form>
            <div class="ui form">
  <div class="field">
        <div>
            <label> Name:  </label>
            <div className="form-outline mb-4">
                <div className="field">
                    <input type="text" placeholder="name "></input>
                </div>
                 
            </div>
        </div>
    
        <label>Email </label>
        <div className="form-outline mb-4">
    
    <input type="text" placeholder="email@yahoo.com"></input>
  

    </div>
  </div>    
  <label>Message</label>
  <div class="field">
    <textarea rows="2"></textarea>
  </div>


</div>
<div>
<button type="submit" className="btn btn-outline-danger"> Send </button>
           </div> 
           </form>
        </div>

    )
}

  
