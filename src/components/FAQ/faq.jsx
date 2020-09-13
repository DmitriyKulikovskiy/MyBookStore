import React from "react";
import "./faq.sass";
import { answerText } from "../../assets/text";

const FAQ = ({ changeStatusFAQ,faq }) => {
    return (
        <div className="container faq-container">
            <div className="title">FAQs</div>

            {faq.map((el) => {
                return (
                    <div key={el.id} className="el-box">
                        <div
                            className="question-element"
                            onClick={() => changeStatusFAQ(el.id)}
                        >
                            <span
                                className={
                                    el.status === false
                                        ? "question-close"
                                        : "question-open"
                                }
                            >
                                {el.question}
                            </span>
                            {el.status === false ? (
                                <i
                                    className="fa fa-chevron-up"
                                    aria-hidden="true"
                                ></i>
                            ) : (
                                <i
                                    className="fa fa-chevron-down"
                                    aria-hidden="true"
                                ></i>
                            )}
                        </div>
                        {el.status === true ? (
                            <div className="answer-element">{answerText}</div>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
};

export default FAQ;
