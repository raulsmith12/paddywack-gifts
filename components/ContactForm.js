import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";

const ContactForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [message, setMessage] = useState('');

    const submitForm = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://backend.paddywackgifts.com/public/api/contacts',
            headers: { 'content-type': 'application/json' },
            data: {
                'name': customerName,
                'phone_no': customerPhone,
                'email': customerEmail,
                'message': message
            }
        })
        .then(result => {
            
            swal("Success!", "Your form submission was successful. You should hear back from us shortly.", "success")
        })
        .catch(error => swal("Uh oh! Something went wrong. Please try again."))
    }

    return (
        <form onSubmit={e => submitForm(e)}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="container">
                            <div className="row">
                                <div className="col mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" required defaultValue={customerName} onChange={e => setCustomerName(e.target.value)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" id="phone" name="phone" defaultValue={customerPhone} onChange={e => setCustomerPhone(e.target.value)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" required defaultValue={customerEmail} onChange={e => setCustomerEmail(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <label htmlFor="message" className="form-label">Message/Comments</label>
                        <textarea className="form-control mb-3" id="message" name="message" required defaultValue={message} onChange={e => setMessage(e.target.value)} rows="5" />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ContactForm;