import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SouthParkActions, SouthParkState } from "../reducers/south-park-reducer";

export function DropDownPrioritySelector(props:{id:string}){

    const selector = useSelector((store: SouthParkState) => store)
    const complaint = selector.complaintList.filter((item)=> item.complaint_id === props.id)[0]
    const sendDispatch = useDispatch()<SouthParkActions>
    const [selectedOption, setSelectedOption] = useState("1");

    function handleClick(){
        complaint.priority = selectedOption;
        console.log(complaint)
        sendDispatch({type: "REQUEST_EDIT_COMPLAINT", payload: complaint});
    }
  return (
    <>
        <select value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
        </select>
        <button onClick={()=>handleClick()}>Update</button>
    </>
  );
}