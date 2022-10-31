import React from 'react';

function Contact() {
    return (
        <div>
            <h1>Contacts</h1>
            <form className='contacts-form'>
                <input type='text' className='contact-input' placeholder='Full Name' />
                <input type='text' className='contact-input' placeholder='Email' />
                <button className='submit-btn'>Add Contact</button>
            </form>
            <br></br>
            <br></br>
            <table>
                <tbody>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Test Name</td>
                        <td>Test Email</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Contact;