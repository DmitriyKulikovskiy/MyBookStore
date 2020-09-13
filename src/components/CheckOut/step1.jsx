import React from "react";

const StepOne = ({
    setName,
    setLastName,
    setPhone,
    setCity,
    name,
    lastName,
    phone,
    city,
}) => {

    const error = (error) => {
        return error.length < 1 ? "Field is required" : null
    }
    const classError = (error) => {
        return error.length >= 1 ? 'greenB form-control' : 'redB form-control'
    }
    return (
        <>
            <div className="step1">
                <div className="num">1</div>
                <div>Your contacts</div>
            </div>
            <form className="btm">
                <div className="row">
                    <div className="col">
                        <div className='error-type'>
                            {error(name)}
                        </div>
                        <input
                            type="text"
                            className={classError(name)}
                            placeholder="First name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <div className='error-type'>
                            {error(lastName)}
                        </div>
                        <input
                            type="text"
                            className={classError(lastName)}
                            placeholder="Last name"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className='error-type'>
                            {error(phone)}
                        </div>
                        <input
                            type="phone"
                            className={classError(phone)}
                            placeholder="Phone number"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <div className='error-type'>
                            {error(city)}
                        </div>
                        <input
                            type="text"
                            className={classError(city)}
                            placeholder="City"
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </>
    );
};


export default StepOne;
