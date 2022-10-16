import React from 'react';

function Contact() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            let fullName = data[0].name;
            let email = data[0].email;
            console.log(fullName, email)
        })

    return (
        <div>
            <h1>Contacts</h1>
            <form className='contacts-form'>
                <input type='text' className='contact-input' placeholder='Full Name' />
                <input type='text' className='contact-input' placeholder='Email' />
                <button className='submit-btn'>Add Contact</button>
            </form>
        </div>
    )
};

export default Contact;