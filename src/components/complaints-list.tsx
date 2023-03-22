import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { SouthParkActions, SouthParkState } from "../reducers/south-park-reducer";
import "../stylesheets/set-priority-page-style.css"

export function ComplaintsList(){
    const selector = useSelector((store: SouthParkState) => store)
    const sendDispatch = useDispatch()<SouthParkActions>
    const router = useNavigate()

    useEffect(()=>{ 
      
        (async ()=>{
            
            await sendDispatch({type: "REQUEST_GET_ALL_COMPLAINTS"});
            
        })();
        
    },[]);

    return(
        <>
            <div>
                <button onClick={()=> sendDispatch({type: "SORT_COMPLAINT_LIST"})}>Sort</button>
                <button onClick={()=> router("/setPriority")}>Review Complaints</button>
            </div>

            <table>
                <tr>
                    <th>Complaint ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Priority</th>
                    {/* <th>Create meeting?</th> */}
                </tr>
                {selector.complaintList.map(
                    (item) =>   <tr key={item.complaint_id}> 
                                    <th>{item.complaint_id}</th>
                                    <th>{item.title}</th>
                                    <th>{item.description}</th>
                                    <th>{item.status}</th>
                                    <th>{(item.priority.toString() === "0") ? (<div>ignored</div>) : item.priority}</th> 
                                    {/* <th><button onClick={() =>router("/createMeeting/" + item.complaint_id)}>Create Meeting</button></th> */}
                                </tr>
                    )}
            </table>
                
        </>
    );
}