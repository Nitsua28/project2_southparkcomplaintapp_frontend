import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { DropDownPrioritySelector } from "../components/drop-down-priority-selector";
import { SouthParkActions, SouthParkState } from "../reducers/south-park-reducer";
import { LeftVerticalBanner } from "../stylecomponents/left-vertical-banner";
import { RightVerticalBanner } from "../stylecomponents/right-vertical-banner";
import { TopBanner } from "../stylecomponents/top-banner";

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
        <>
            <video src='sunrise.mp4' autoPlay muted/>
            <LeftVerticalBanner/>
            <RightVerticalBanner/>
            <TopBanner/>
            <div className="set-priority-parent-container">
                <div className="set-priority-container">
                    <div className="set-priority-list-container">
                        <div className="set-priority-header-container">
                            <h1>Review Complaints</h1>
                        </div>
                        <div className="set-priority-list-list-container">
                        <table>
                        <tr>
                            <th>Complaint ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Current Priority</th>
                            <th>Select Priority</th>
                            <th>Update?</th>
                        </tr>
                        {selector.complaintList.map(
                            (item) =>   <tr key={item.complaint_id}> 
                                            <th>{item.complaint_id}</th>
                                            <th>{item.title}</th>
                                            <th>{item.description}</th>
                                            <th>{item.status}</th>
                                            <th>{(item.priority.toString() === "0") ? (<div>ignored</div>) : item.priority}</th> 
                                            <DropDownPrioritySelector id ={item.complaint_id}/>
                                        </tr>
                            )}
                    </table>
                        </div>
                    </div>
                    <div className="set-priority-back-button-container">
                        <button onClick={()=> router("/council")}>Back</button>
                    </div>
                </div>
            </div>
        </>
    );
}