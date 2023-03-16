import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SouthParkActions, SouthParkState } from "../reducers/south-park-reducer";

export function MeetingList(){
    const selector = useSelector((store: SouthParkState) => store)
    const sendDispatch = useDispatch()<SouthParkActions>

    useEffect(()=>{ 
      
        (async ()=>{
            
            await sendDispatch({type: "REQUEST_GET_ALL_MEETINGS"});
            
        })();
        
      },[]);
      
    return(
        <>
            <ul>
                {selector.meetingList.map(
                    (item) => <li key={item.meeting_Id}> {item.address} <button>Attend</button></li>
                    )}
            </ul>
        </>
    );
}