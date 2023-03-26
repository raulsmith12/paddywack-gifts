import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import swal from "sweetalert";

const CommissionForm = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [imagePreview, setImagePreview] = useState('');
    const [uploadImage, setUploadImage] = useState('');
    const [pieceSize, setPieceSize] = useState('');
    const [pieceShape, setPieceShape] = useState('');
    const [message, setMessage] = useState('');

    const submitForm = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://backend.paddywackgifts.com/public/api/commissions',
            headers: { 'content-type': 'application/json' },
            data: {
                'name': customerName,
                'phone_no': customerPhone,
                'email': customerEmail,
                'notes': message,
                'size': pieceSize,
                'shape': pieceShape,
                'custom_image': imagePreview
            }
        })
        .then(result => {
            swal("Success!", "Your form submission was successful. You should hear back from us shortly.", "success")
        })
        .catch(error => swal("Uh oh! Something went wrong. Please try again."))
    }

    const imageUpload = e => {
        let file = e.target.files[0];
        createImage(file);
        console.log(file);
    }

    const createImage = (file) => {
        let reader  = new FileReader();
        reader.onload = (e) => {
            setUploadImage(e.target.result);
            console.log(e.target.result);
        };
        reader.readAsDataURL(file);
    }

    const fileUpload = e => {
        e.preventDefault();
        setShowLoader(true);
        axios({
            method: 'post',
            url: 'https://backend.paddywackgifts.com/public/api/files',
            headers: { 'content-type': 'application/json' },
            data: {
                'file_name': uploadImage
            }
        })
        .then(result => {
            setShowLoader(false),
            swal("Success!", "Your image has been uploaded successfully! Be sure to look over the entire form before submitting to the creator!", "success"),
            setImagePreview(result.data);
        })
    }

    return (
        <>
            <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="#922667" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName="position-absolute top-50 start-50 translate-middle"
                visible={showLoader}
            />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <form onSubmit={e => submitForm(e)}>
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
                                <div className="row">
                                    <div className="col mb-3">
                                        <label htmlFor="message" className="form-label">Notes for the Creator</label>
                                        <textarea className="form-control mb-3" id="message" name="message" required defaultValue={message} onChange={e => setMessage(e.target.value)} rows="5" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <select className="form-select" defaultValue={pieceSize} onChange={e => setPieceSize(e.target.value)}>
                                            <option value="">Please select a size</option>
                                            <option value="keychain">Keychain</option>
                                            <option value="small">Small</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                            <option value="xlarge">X-Large</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <select className="form-select" defaultValue={pieceShape} onChange={e => setPieceShape(e.target.value)}>
                                            <option value="">Please select a shape</option>
                                            <option value="circle">Circle</option>
                                            <option value="square">Square</option>
                                            <option value="rectangle">Rectangle</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primo">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <form onSubmit={fileUpload}>
                            <input type="file" onChange={imageUpload} className="form-control my-2" />
                            <button type="submit" className="btn btn-outline-success">Upload</button>
                        </form>
                        { imagePreview && <img src={imagePreview} width="100%" alt="preview" /> }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommissionForm;