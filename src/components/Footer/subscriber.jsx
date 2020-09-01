import React from "react";
import "./subscriber.sass";
const Subscriber = () => {
    return (
        <div className="container subscriber-container">
            <div className="subscriber-box">
                <div className="subscriber-wrapper">
                    <div className="subscriber-background">
                        <div className="subscriber-title">
                            SUBSCRIBE TO OUR NEWSLETTER
                        </div>
                        <form className="form-box">
                            <input placeholder='Enter your e-mail address' type='text'/>
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscriber;
