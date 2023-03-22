import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { SouthParkActions, SouthParkState } from "../reducers/south-park-reducer";

export function MeetingList(){
    const router = useNavigate();
    const selector = useSelector((store: SouthParkState) => store)
    const sendDispatch = useDispatch()<SouthParkActions>

    useEffect(()=>{ 
      
        (async ()=>{
            
            await sendDispatch({type: "REQUEST_GET_ALL_MEETINGS"});
            
        })();
        
      },[]);
      
    return(
        <>
            <table>
                <tr>
                    <th>Meeting ID</th>
                    <th>Address</th>
                    <th>Date</th>
                    <th>Summary</th>
                    {/* <th>Complaint title</th> */}
                    {/* <th>attendees</th>
                    <th>speakers</th> */}
                    <th>attend?</th>
                    <th>Report complaint to Meeting</th>
                </tr>
                
                    {selector.meetingList.map(
                        (item) =>   <tr key={item.meeting_Id}> 
                                        <td>{item.meeting_Id}</td>
                                        <td>{item.address}</td>
                                        <td>{new Date(item.time * 1000).toLocaleString()}</td>
                                        <td>{item.summary}</td>
                                        {/* <td>{item.attendees}</td>
                                        <td>{item.speakers}</td> */}
                                        <td><button>Attend</button></td>
                                        <td><button onClick={()=>router("/reportComplaint/" + item.meeting_Id)}>report</button></td>
                                    </tr>
                        )}
                
            </table>
        </>
    );
}