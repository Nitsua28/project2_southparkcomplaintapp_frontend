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
            <button onClick={()=> sendDispatch({type: "SORT_COMPLAINT_LIST"})}>Sort</button>
            <button onClick={()=> router("/setPriority")}>Set Priorities</button>
            <ul>
                {selector.complaintList.map(
                    (item) => <li key={item.complaint_id}> {item.title} {item.priority}<button onClick={() =>router("/createMeeting/" + item.complaint_id)}>Create Meeting</button></li>
                    )}
            </ul>
        </>
    );
}