import React from 'react';

function Contact() {
    return (
        <div>
            <h1>Contacts</h1>
            <form>
                <input type='text' className='firstName' placeholder='First Name' />
                <input type='text' className='lastName' placeholder='Last Name' />
                <input type='text' className='number' placeholder='Phone Number' />
                <input type='text' className='email' placeholder='Email' />
            </form>
        </div>
    )
};

export default Contact;