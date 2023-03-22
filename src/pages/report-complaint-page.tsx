import { useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { ComplaintFormReducer, ComplaintFormState } from "../reducers/complaint-form-reducer";
import { SouthParkActions } from "../reducers/south-park-reducer";
import { LeftVerticalBanner } from "../stylecomponents/left-vertical-banner";
import { RightVerticalBanner } from "../stylecomponents/right-vertical-banner";
import { TopBanner } from "../stylecomponents/top-banner";
import "../stylesheets/report-complaint-page-style.css"


export function ReportComplaintPage(){
    const {meetingid} = useParams();
    const router = useNavigate();
    const initialState: ComplaintFormState = {
        complaint_id: "",
        title: "",
        description: "",
        status: "complaintNew",
        meeting: meetingid as string,
        priority: "9"
    }

    const [FormState, dispatchForm] = useReducer(ComplaintFormReducer, initialState);
    const sendDispatch = useDispatch()<SouthParkActions>

    useEffect(()=>{ 
      
        (async ()=>{
            
            await sendDispatch({type: "REQUEST_GET_ALL_COMPLAINTS"});
            await sendDispatch({type: "REQUEST_GET_ALL_MEETINGS"});
            
        })();
        
      },[]);
      
    function handleClick(){
        
        sendDispatch({type: "REQUEST_CREATE_COMPLAINT", payload: FormState})
        router("/")
    }
    return(
        <>
            <video src='/sunrise.mp4' autoPlay muted/>
            <LeftVerticalBanner/>
            <RightVerticalBanner/>
            <TopBanner/>
            <div className="report-complaint-parent-container">
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
                            <textarea style={{ width: "500px", height: "500px" }} onChange={(e)=> dispatchForm({type: "UPDATE_DESCRIPTION", payload: e.target.value})}></textarea>
                        </div>
                        <div className="report-complaint-report-button-container">
                            <button onClick={()=> handleClick()}>Report</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}