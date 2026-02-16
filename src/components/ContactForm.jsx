import React, { useState } from "react";
import '../css/ContactForm.css'

const ContactForm = () => {
    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
        const form = e.target;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('Sikeresen elküldve!');
                form.reset();
            } else {
                setStatus('Hiba történt!');
            }
        } catch (error) {
            setStatus('Hiba történt!');
        }
    }
    return (
        <form
            className="form"
            action="https://formsubmit.co/75d92145719586daf9e47f78a26d6034"
            method="POST"
            onSubmit={handleSubmit}
        >
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://ehs-szolgaltatas.com/koszonjuk" />
            <input type="hidden" name="_template" value="box" />

            <input
                type="text"
                name="name"
                placeholder="Név"
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                required
            />

            <textarea
                name="message"
                placeholder="Üzenet"
                required
            />

            <button type="submit">Küldés</button>

            {status && <p className={status.includes('Hiba') ? 'error' : ''}>{status}</p>}
        </form>
    )
}

export default ContactForm;