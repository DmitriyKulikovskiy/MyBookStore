import React, { useState } from "react";
import "./contact-us.sass";
import SimpleMap from "../../assets/google-map/google-map";

const ContactUs = ({ addSupportReview, supportReview }) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        addSupportReview(name, lastName, message);
        setStatus(!status);
    };

    return (
        <>
            <SimpleMap />
            <div className="container contact-us-container">
                <form onSubmit={onSubmit}>
                    <div className="title">WE ARE HAPPY TO HEAR FROM YOU</div>

                    {status === true ? (
                        <div className="submitDone">
                            <span>
                                Thanks for contacting us. We'll get back to you
                                as soon as possible.
                            </span>
                            <i onClick={() => setStatus(!status)} className="fa fa-times" aria-hidden="true"></i>
                        </div>
                    ) : null}

                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                            Message
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="button-box">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactUs;
