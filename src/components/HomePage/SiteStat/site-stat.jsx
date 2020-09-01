import React from 'react'
import './site-stat.sass'

const SiteStat = () => {
    return (
        <div className="container">
            <div className="row stat-container">
                <div className="col-lg-4">
                    <div className="stat-box">
                        <div className="stat-wrapper">
                            <i className="fa fa-users" aria-hidden="true"></i>
                            <p className="stat-number">432,771</p>
                            <p className="stat-title">Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="stat-box">
                        <div className="stat-wrapper">
                            <i className="fa fa-columns" aria-hidden="true"></i>
                            <p className="stat-number">25,000</p>
                            <p className="stat-title">Book Collections</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="stat-box">
                        <div className="stat-wrapper">
                            <i className="fa fa-globe" aria-hidden="true"></i>
                            <p className="stat-number">1,069</p>
                            <p className="stat-title">Our Store Around the World</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiteStat
