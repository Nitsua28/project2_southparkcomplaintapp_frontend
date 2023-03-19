import { ComplaintFormState } from "./complaint-form-reducer"
import { MeetingFormState } from "./meeting-form-reducer";
import { UserFormState } from "./user-form-reducer";

export type LoginForm = {
    username: String,
    password: String
}
export type SouthParkState = {
    currentUserId: String,
    complaintList: ComplaintFormState[],
    userList: UserFormState[],
    meetingList: MeetingFormState[],
}

export const initialState: SouthParkState ={
    currentUserId: "",
    complaintList: [],
    userList: [],
    meetingList: [],
}

export type AppendUserList = {type: "APPEND_USER_LIST", payload:UserFormState}
export type EditUser = {type: "EDIT_USER", payload:UserFormState}
export type RefreshUserList = {type: "REFRESH_USER_LIST", payload:UserFormState[]}
export type DeleteUser = {type: "DELETE_USER", payload:string}

export type AppendComplaintList = {type: "APPEND_COMPLAINT_LIST", payload:ComplaintFormState}
export type EditComplaint = {type: "EDIT_COMPLAINT", payload:ComplaintFormState}
export type RefreshComplaintList = {type: "REFRESH_COMPLAINT_LIST", payload:ComplaintFormState[]}
export type DeleteComplaint = {type: "DELETE_USER", payload:string}
export type GetComplaintById = {type: "GET_COMPLAINT_BY_ID", payload:string}
export type SortComplaintList = {type: "SORT_COMPLAINT_LIST"}

export type AppendMeetingList = {type: "APPEND_MEETING_LIST", payload:MeetingFormState}
export type EditMeeting = {type: "EDIT_MEETING", payload:MeetingFormState}
export type RefreshMeetingList = {type: "REFRESH_MEETING_LIST", payload:MeetingFormState[]}
export type DeleteMeeting = {type: "DELETE_MEETING", payload:string}

export type RequestCreateUser = {type: "REQUEST_CREATE_USER", payload: UserFormState}
export type RequestGetAllUsers = {type: "REQUEST_GET_ALL_USERS"}
export type RequestEditUser = {type: "REQUEST_EDIT_USER", payload:UserFormState}
export type RequestDeleteUser = {type: "REQUEST_DELETE_USER", payload: string}

export type RequestCreateComplaint = {type: "REQUEST_CREATE_COMPLAINT", payload: ComplaintFormState}
export type RequestGetComplaintById = {type: "REQUEST_GET_COMPLAINT_BY_ID", payload: string}
export type RequestGetAllComplaints = {type: "REQUEST_GET_ALL_COMPLAINTS"}
export type RequestEditComplaint = {type: "REQUEST_EDIT_COMPLAINT", payload:ComplaintFormState}
export type RequestDeleteComplaint = {type: "REQUEST_DELETE_COMPLAINT", payload: string}

export type RequestCreateMeeting = {type: "REQUEST_CREATE_MEETING", payload: MeetingFormState}
export type RequestGetAllMeetings = {type: "REQUEST_GET_ALL_MEETINGS"}
export type RequestEditMeeting = {type: "REQUEST_EDIT_MEETING", payload:MeetingFormState}
export type RequestDeleteMeeting = {type: "REQUEST_DELETE_MEETING", payload: string}

export type RequestLogin = {type: "REQUEST_LOGIN", payload: LoginForm}
export type HandleLogin = {type: "HANDLE_LOGIN_RESPONSE", payload: UserFormState}

export type SouthParkActions = AppendUserList | EditUser | RefreshUserList | DeleteUser |
AppendComplaintList | EditComplaint | RefreshComplaintList | DeleteComplaint | GetComplaintById | SortComplaintList |
AppendMeetingList | EditMeeting | RefreshMeetingList | DeleteMeeting | 
RequestCreateUser | RequestGetAllUsers | RequestEditUser | RequestDeleteUser |
RequestCreateComplaint | RequestGetAllComplaints | RequestEditComplaint | RequestDeleteComplaint | RequestGetComplaintById |
RequestCreateMeeting | RequestGetAllMeetings | RequestEditMeeting | RequestDeleteMeeting |
RequestLogin | HandleLogin

export default function SouthParkReducer(state: SouthParkState = initialState, action: SouthParkActions):SouthParkState{

const nextState: SouthParkState = JSON.parse(JSON.stringify(state));
switch(action.type){
    
    case "REFRESH_MEETING_LIST":{
        nextState.meetingList = action.payload;
        return nextState
    }
    case "APPEND_MEETING_LIST": {
        nextState.meetingList.push(action.payload);
        return nextState
    }
    case "EDIT_COMPLAINT":{
        const index = nextState.complaintList.findIndex((item)=>item.complaint_id === action.payload.complaint_id)
        let filteredList = nextState.complaintList.filter((item) => item.complaint_id !== action.payload.complaint_id)
        filteredList.splice(index,0,action.payload)
        nextState.complaintList = filteredList;
        return nextState
    }
    case "REFRESH_COMPLAINT_LIST":{
        nextState.complaintList = action.payload;
        return nextState
    }
    case "SORT_COMPLAINT_LIST":{
        nextState.complaintList.sort((a, b) => Number(a.priority) - Number(b.priority))
        return nextState
    }
    case "HANDLE_LOGIN_RESPONSE":{
        nextState.currentUserId = action.payload.user_id;
        return nextState
    }
    default:{
        return nextState
    }
    
}
}