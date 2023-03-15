import React from "react"
import "../stylesheets/unregistered-page-style.css"

export function UnregisteredPage(){
    return(
        <div className="unregister-page-container">
            <div className="unregister-page-report-complaint-container">
                <div className="unregister-page-report-complaint-button-container">
                    <button>Report Complaint</button>
                </div>
            </div>
            <div className="unregistered-page-meetings-container">
                <div className="unregistered-page-meetings-list-container">
                    <div className="unregistered-page-meetings-list-header-container">
                        <h1>Meetings</h1>
                    </div>
                    <div className="unregistered-page-meetings-list-list-container"></div>
                 </div>
            </div>
            <div className="unregistered-page-login-container">
                <div className="unregistered-page-login-box-container">
                    <div className="unregistered-page-login-header-container">
                        <h1>Login</h1>
                    </div>
                    <div className="unregistered-page-login-username-container"></div>
                    <div className="unregistered-page-login-password-container"></div>
                    <div className="unregistered-page-login-button-container"></div>
                </div>
            </div>
        </div>
    )
}