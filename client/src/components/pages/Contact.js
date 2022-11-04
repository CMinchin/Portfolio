import React from 'react';
import "../../additional/css/Contact.css"

function Contact() {
    const validate = (e) => {
        let field = e.target.id;
        let value = e.target.value;
        switch (field) {
            case "name":
                if (/^[\x00-\x7F]+$/.test(value)) {
                    e.target.classList.remove("invalid");
                } else {
                    e.target.classList.add("invalid");
                }
            break
            case "contact":
                if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value) || /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/.test(value)) {
                    e.target.classList.remove("invalid");
                } else {
                    e.target.classList.add("invalid");
                }
            break
            case "message":
                if (/^(?!\s*$).+/.test(value)) {
                    e.target.classList.remove("invalid");
                } else {
                    e.target.classList.add("invalid");
                }
            break
        }
    }
    const sendMessage = (e) => {
        let name = document.getElementById("name");
        let contact = document.getElementById("contact");
        let message = document.getElementById("message");
        if (name.classList.contains("invalid") && contact.classList.contains("invalid") && message.classList.contains("invalid") || !name.value ||!contact.value || !message.value) {
            e.target.classList.add("invalid");
        }

        let data = {
            name: name.value,
            contact: contact.value,
            message: message.value
        };
        
        try {
            fetch("/api/contact", {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                  'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
              })
            .then(()=>{
                window.alert("You message has been successfully sent");
            })
        }
        catch {
            window.alert("An error has occurred");
        }
    }
    return <>
        <h2>
            Get in touch with me
        </h2>
        <h4>
            Name or psudonymn:
        </h4>
        <input id='name' className='input' onBlur={validate}/>
        <p>
            This name is invalid; a name must contain only ASCII characters
        </p>
        <h4>
            Means of contact (email or phone number):
        </h4>
        <input id='contact' className='input' onBlur={validate}/>
        <p>
            This field is invalid; it must atleast contain a valid email or phone number
        </p>
        <h4>
            Message:
        </h4>
        <textarea id='message' className='input' onBlur={validate}/>
        <p>
            This field is invalid; You must actually have a message
        </p>
        <button id='submit' className='input' type='text' onClick={sendMessage}>
            Get in contact
        </button>
        <p>
            Your must have valid inputs for all three inputs
        </p>
    </>;
}

export default Contact;
