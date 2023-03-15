import { ComplaintFormState } from "./complaint-form-reducer"
import { MeetingFormState } from "./meeting-form-reducer";
import { UserFormState } from "./user-form-reducer";


export type SouthParkState = {
    complaintList: ComplaintFormState[],
    userList: UserFormState[],
    meetingList: MeetingFormState[],
}

export const initialState: SouthParkState ={
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
export type RefreshComplaintList = {type: "REFRESH_USER_LIST", payload:ComplaintFormState[]}
export type DeleteComplaint = {type: "DELETE_USER", payload:string}

export type AppendMeetingList = {type: "APPEND_MEETING_LIST", payload:MeetingFormState}
export type EditMeeting = {type: "EDIT_MEETING", payload:MeetingFormState}
export type RefreshMeetingList = {type: "REFRESH_MEETING_LIST", payload:MeetingFormState[]}
export type DeleteMeeting = {type: "DELETE_MEETING", payload:string}

export type RequestCreateUser = {type: "REQUEST_CREATE_USER", payload: UserFormState}
export type RequestGetAllUsers = {type: "REQUEST_GET_ALL_USERS"}
export type RequestEditUser = {type: "REQUEST_EDIT_USER", payload:UserFormState}
export type RequestDeleteUser = {type: "REQUEST_DELETE_USER", payload: string}

export type RequestCreateComplaint = {type: "REQUEST_CREATE_COMPLAINT", payload: ComplaintFormState}
export type RequestGetAllComplaints = {type: "REQUEST_GET_ALL_COMPLAINTS"}
export type RequestEditComplaint = {type: "REQUEST_EDIT_COMPLAINT", payload:ComplaintFormState}
export type RequestDeleteComplaint = {type: "REQUEST_DELETE_COMPLAINT", payload: string}

export type RequestCreateMeeting = {type: "REQUEST_CREATE_MEETING", payload: MeetingFormState}
export type RequestGetAllMeetings = {type: "REQUEST_GET_ALL_MEETINGS"}
export type RequestEditMeeting = {type: "REQUEST_EDIT_MEETING", payload:MeetingFormState}
export type RequestDeleteMeeting = {type: "REQUEST_DELETE_MEETING", payload: string}

//export type SouthParkActions = AppendList | RefreshList | DeleteEmployee | EditEmployee | RequestCreateEmployee | RequestGetAllEmployees | RequestEditEmployee | RequestDeleteEmployee

export default function SouthParkReducer(state: SouthParkState = initialState, action: EmployeeActions):SouthParkState{

const nextState: EmployeeState = JSON.parse(JSON.stringify(state));
switch(action.type){
    case "APPEND_LIST":{
        nextState.list.push(action.payload);
        return nextState
    }
    case "REFRESH_LIST":{
        nextState.list = action.payload;
        return nextState
    }
    case "EDIT_EMPLOYEE":{
        let filteredList: EmployeeFormState[] = nextState.list.filter((item)=>item.id !== action.payload.id);
        filteredList.push(action.payload)
        nextState.list = filteredList
        return nextState
    }
    case "DELETE_EMPLOYEE":{
        let filteredList: EmployeeFormState[] = nextState.list.filter((item)=>item.id !== action.payload);
        nextState.list = filteredList
        return nextState
    }

    default:{
        return nextState
    }
    
}
}