import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ComplaintFormReducer, ComplaintFormState } from "../reducers/complaint-form-reducer";
import { SouthParkActions } from "../reducers/south-park-reducer";
import "../stylesheets/report-complaint-page-style.css"

export function ReportComplaintPage(){
    const router = useNavigate();
    const initialState: ComplaintFormState = {
        complaint_id: "",
        title: "",
        description: "",
        status: "",
        meeting: "",
        priority: ""
    }

    const [FormState, dispatchForm] = useReducer(ComplaintFormReducer, initialState);
    const sendDispatch = useDispatch()<SouthParkActions>

    function handleClick(){
        console.log(FormState);
        sendDispatch({type: "REQUEST_CREATE_COMPLAINT", payload: FormState})
        router("/")
    }
    return(
        <div className="report-complaint-container">
            <div className="report-complaint-column-container">
                <div className="report-complaint-header-container">
                    <h1>Report a Complaint</h1>
                </div>
                <div className="report-complaint-title-container">
                <label>Title</label>
                    <input onChange={(e)=> dispatchForm({type: "UPDATE_TITLE", payload: e.target.value})}></input>
                </div>
                <div className="report-complaint-report-complaint-description-container">
                    <label>Description</label>
                    <input style={{ width: "100px", height: "100px" }} onChange={(e)=> dispatchForm({type: "UPDATE_DESCRIPTION", payload: e.target.value})}></input>
                </div>
                <div className="report-complaint-report-button-container">
                    <button onClick={()=> handleClick()}>Report</button>
                </div>
            </div>
        </div>
    );
}