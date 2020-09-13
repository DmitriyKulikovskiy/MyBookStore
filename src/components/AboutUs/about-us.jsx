import React from "react";
import "./about-us.sass";
import img1 from "../../assets/about-us.jpg";
import { aboutUs1, aboutUs2, aboutUs3 } from "../../assets/text";
import member1 from "../../assets/members/au_member_1.jpg";
import member2 from "../../assets/members/au_member_2.jpg";
import member3 from "../../assets/members/au_member_3.jpg";
import member4 from "../../assets/members/au_member_4.jpg";
import HappyCustomers from "../HomePage/HappyCustomers/happy-customers";
import SiteStat from "../HomePage/SiteStat/site-stat";

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <img src={img1} />
            <div className="title">NICE TO MEET YOU</div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div>{aboutUs1}</div>
                        <div>{aboutUs2}</div>
                    </div>
                    <div className="col-lg-6">
                        <div>{aboutUs3}</div>
                    </div>
                </div>
            </div>
            <div className="member-container">
                <div className="title">OUR BOARD MEMBER</div>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-3 col-md-3">
                            <div className="member-element">
                                <img src={member1} />
                                <div className="name">David Fernandez</div>
                                <div className="position">
                                    Chief Executive Officer
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="member-element">
                                <img src={member2} />
                                <div className="name">Lisa Wright</div>
                                <div className="position">
                                    Chief Marketing Officer
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3  col-md-3">
                            <div className="member-element">
                                <img src={member3} />
                                <div className="name">Bobby Morrison</div>
                                <div className="position">
                                    Chief Technology Officer
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="member-element">
                                <img src={member4} />
                                <div className="name">Sarah Jackson</div>
                                <div className="position">
                                    Chief Design Officer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HappyCustomers />
            <SiteStat />
        </div>
    );
};

export default AboutUs;
