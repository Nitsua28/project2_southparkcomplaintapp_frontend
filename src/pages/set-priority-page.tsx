import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { DropDownPrioritySelector } from "../components/drop-down-priority-selector";
import { SouthParkActions, SouthParkState } from "../reducers/south-park-reducer";

export function SetPriorityPage(){
    const selector = useSelector((store: SouthParkState) => store)
    const sendDispatch = useDispatch()<SouthParkActions>
    const router = useNavigate()
    
    useEffect(()=>{ 
      
        (async ()=>{
            
            await sendDispatch({type: "REQUEST_GET_ALL_COMPLAINTS"});
            
        })();
        
      },[]);
      
    return(
        <div className="set-priority-container">
            <div className="set-priority-list-container">
                <div className="set-priority-header-container">
                    <h1>Set Priorities</h1>
                </div>
                <div className="set-priority-list-list-container">
                    <ul>
                        {selector.complaintList.map(
                            (item) => <li key={item.complaint_id}> {item.title} {item.priority} <DropDownPrioritySelector id={item.complaint_id}/></li>
                            )}
                    </ul>
                </div>
            </div>
            <div className="set-priority-back-button-container">
                <button onClick={()=> router("/council")}>Back</button>
            </div>
        </div>
    );
}