import { ComplaintFormState } from "../reducers/complaint-form-reducer";
import { MeetingFormState } from "../reducers/meeting-form-reducer";



export async function createComplaint(params:ComplaintFormState):Promise<ComplaintFormState> {
    const httpResponse = await fetch("http://localhost:8080/complaint", {
        method:"POST",
        body:JSON.stringify(params),
        headers:{"Content-Type":"application/json"}
    });
    const complaint = await httpResponse.json();
    return complaint;
}

export async function getAllMeetings():Promise<MeetingFormState[]> {
    const httpResponse = await fetch("http://localhost:8080/meeting", {
        method:"GET",
        headers:{"Content-Type":"application/json"}
    });
    const meetings : MeetingFormState[] = await httpResponse.json();
    return meetings;
}