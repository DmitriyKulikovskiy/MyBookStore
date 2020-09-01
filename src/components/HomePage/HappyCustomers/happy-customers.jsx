import React from "react";
import "./happy-customers.sass";
import img1 from "../../../assets/clients/client1.png";
import img2 from "../../../assets/clients/client2.png";
import img3 from "../../../assets/clients/client3.png";
import { textCustomers } from "../../../assets/text";

const HappyCustomers = () => {
    return (
        <div className="container">
            <div className="title-customers">OUR HAPPY CUSTOMERS</div>
            <div className="customers-description">{textCustomers}</div>
            <div className="customer-container">
                <div className="customer-box">
                    <img src={img1} />
                    <div className="customer-data">
                        <div className="customer-name">Jack Owen</div>
                        <div className="customer-status">Book Lover</div>
                    </div>
                </div>
                <div className="customer-box">
                    <img src={img2} />
                    <div className="customer-data">
                        <div className="customer-name">Matt Grimsby</div>
                        <div className="customer-status">Reader</div>
                    </div>
                </div>
                <div className="customer-box">
                    <img src={img3} />
                    <div className="customer-data">
                        <div className="customer-name">Darick Wimbley</div>
                        <div className="customer-status">Writer</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyCustomers;
