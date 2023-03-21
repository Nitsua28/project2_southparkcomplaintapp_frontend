import { useNavigate, useParams } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../stylesheets/create-meeting-page-style.css"
import { MeetingFormReducer, MeetingFormState } from "../reducers/meeting-form-reducer";
import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SouthParkActions, SouthParkState } from "../reducers/south-park-reducer";
import { LeftVerticalBanner } from "../stylecomponents/left-vertical-banner";
import { RightVerticalBanner } from "../stylecomponents/right-vertical-banner";
import { TopBanner } from "../stylecomponents/top-banner";
export function CreateMeetingPage(){
    const {complaintid} = useParams();
    let initialState: MeetingFormState = {
        meeting_Id: "",
        address: "",
        time: Date.now(),
        summary: "",
        // attendees: [],
        // speakers: []
    
    }
    const [PeopleForm, setPeople] = useState({
        attendee: "",
        speaker: ""
    });
    const selector = useSelector((store: SouthParkState) => store)
    const complaint = selector.complaintList.filter((item) =>item.complaint_id.toString() === complaintid as string)[0]
    const [FormState, dispatchForm] = useReducer(MeetingFormReducer, initialState)
    const sendDispatch = useDispatch()<SouthParkActions>
    let date = new Date(FormState.time * 1000)
    const router = useNavigate()

    useEffect(()=>{ 
      
        (async ()=>{
            
            await sendDispatch({type: "REQUEST_GET_ALL_COMPLAINTS"});
            await sendDispatch({type: "REQUEST_GET_ALL_MEETINGS"});
            
        })();
        
      },[]);

    function handleClick(){
        const generatedMeetingId = Math.floor(Math.random()*1000).toString()
        FormState.meeting_Id = generatedMeetingId;
        complaint.meeting = generatedMeetingId;
        sendDispatch({type: "REQUEST_EDIT_COMPLAINT", payload: complaint})
        sendDispatch({type: "REQUEST_CREATE_MEETING", payload: FormState})
        router("/council")
    }
    return(
        <>
        <video src='sunrise.mp4' autoPlay muted/>
        <LeftVerticalBanner/>
        <RightVerticalBanner/>
        <TopBanner/>
        
        <div className="cmeeting-container">
            <div className="create-meeting-container">
                <div className="create-meeting-left-column-container">
                    <div className="create-meeting-calendar-container">
                        <div className="create-meeting-calendar-date-container">
                            {date.toUTCString()}
                        </div>
                        <div className="create-meeting-calendar">
                            <Calendar onChange={(value: any,event: any) => dispatchForm({type: "UPDATE_TIME",payload: value.getTime() /1000})}/>
                        </div>
                    </div>
                    <div className="create-meeting-add-people-container">
                        <div className="create-meeting-attendees-container">
                            <div className="create-meeting-attendees-title-container">
                                <h1>Input Attendee name</h1>
                            </div>
                            <div className="create-meeting-attendees-input-container">
                                {/* <input onChange={(e)=> {setPeople({...PeopleForm, attendee:e.target.value})}}></input>
                                <button onClick={()=>dispatchForm({type: "ADD_ATTENDEE", payload: PeopleForm.attendee})}>input</button> */}
                            </div>
                            <div className="create-meeting-attendees-list">
                                {/* {FormState.attendees} */}
                            </div>
                        </div>
                        <div className="create-meeting-speakers-container">
                            <div className="create-meeting-speakers-title">
                                <h1>Input Speaker name</h1>
                            </div>
                            <div className="create-meeting-speakers-input-container">
                                {/* <input onChange={(e)=> {setPeople({...PeopleForm, speaker:e.target.value})}}></input>
                                <button onClick={()=>dispatchForm({type: "ADD_SPEAKER", payload: PeopleForm.speaker})}>input</button> */}
                            </div>
                            <div className="create-meeting-speakers-list">
                            {/* {FormState.speakers} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="create-meeting-button-container">
                    <button onClick={()=>handleClick()}>create</button>
                </div>
                <div className="create-meeting-right-column-container">
                    <div className="create-meeting-address-container">
                        <div className="create-meeting-address-title-container">
                            <h1>Address</h1>
                        </div>
                        <div className="create-meeting-address-input-container">
                            <textarea onChange={(e)=> dispatchForm({type:"UPDATE_ADDRESS",payload: e.target.value})}></textarea>
                        </div>
                    </div>
                    <div className="create-meeting-summary-container">
                        <div className="create-meeting-summary-title-container">
                            <h1>Summary</h1>
                        </div>
                        <div className="create-meeting-summary-input-container">
                            <textarea style={{width: "80%", height: "300px"}} onChange={(e)=> dispatchForm({type:"UPDATE_SUMMARY",payload: e.target.value})}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
    </>
    );
}