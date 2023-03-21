import { ComplaintFormState } from "../reducers/complaint-form-reducer";
import { MeetingFormState } from "../reducers/meeting-form-reducer";
import { LoginForm } from "../reducers/south-park-reducer";
import { UserFormState } from "../reducers/user-form-reducer";


//http://54.202.16.233:8080/appuser
//http://localhost:8080/complaint
export async function createComplaint(params:ComplaintFormState):Promise<ComplaintFormState> {
    const httpResponse = await fetch("http://54.202.16.233:8080/complaint", {
        method:"POST",
        body:JSON.stringify(params),
        headers:{"Content-Type":"application/json"}
    });
    const complaint = await httpResponse.json();
    return complaint;
}

export async function createMeeting(params:MeetingFormState):Promise<MeetingFormState> {
    const httpResponse = await fetch("http://54.202.16.233:8080/meeting", {
        method:"POST",
        body:JSON.stringify(params),
        headers:{"Content-Type":"application/json"}
    });
    const meeting = await httpResponse.json();
    return meeting;
}

export async function getAllMeetings():Promise<MeetingFormState[]> {
    const httpResponse = await fetch("http://54.202.16.233:8080/meeting", {
        method:"GET",
        headers:{"Content-Type":"application/json"}
    });
    const meetings : MeetingFormState[] = await httpResponse.json();
    return meetings;
}

export async function getAllComplaints():Promise<ComplaintFormState[]> {
    const httpResponse = await fetch("http://54.202.16.233:8080/complaint", {
        method:"GET",
        headers:{"Content-Type":"application/json"}
    });
    const complaints : ComplaintFormState[] = await httpResponse.json();
    return complaints;
}

export async function editComplaint(params:ComplaintFormState):Promise<ComplaintFormState> {
    const httpResponse = await fetch("http://54.202.16.233:8080/complaint", {
        method:"PUT",
        body:JSON.stringify(params),
        headers:{"Content-Type":"application/json"}
    });
    const complaint : ComplaintFormState = await httpResponse.json();
    return complaint;
}

export async function login(params:LoginForm):Promise<UserFormState>{
    
    const httpResponse = await fetch("http://54.202.16.233:8080/appuser", {
        method:"PATCH",
        body:JSON.stringify(params),
        headers:{"Content-Type":"application/json"}
    });
    const response = await httpResponse.json();
     
    return response;
}