import {takeEvery, put, all} from "@redux-saga/core/effects"
import { createComplaint, createMeeting, editComplaint, getAllComplaints, getAllMeetings, login } from "../api/requests";
import { ComplaintFormState } from "../reducers/complaint-form-reducer";
import { MeetingFormState } from "../reducers/meeting-form-reducer";
import { LoginForm, RequestLogin, RequestCreateComplaint, RequestGetAllComplaints, RequestCreateMeeting, EditComplaint, RequestEditComplaint } from "../reducers/south-park-reducer"
//worker sagas
export function* createMeetingByForm(action: RequestCreateMeeting){

    try{
        
        const newMeeting: MeetingFormState = yield createMeeting(action.payload);
        yield put({type:"APPEND_MEETING_LIST",payload: newMeeting})
    }catch(e){
        yield put({type:"ERROR", payload: e, error:true
        });
    }
}
export function* createComplaintByForm(action: RequestCreateComplaint){

    try{
        action.payload.complaint_id = Math.floor(Math.random()*1000).toString()
        const newComplaint: ComplaintFormState = yield createComplaint(action.payload);
        yield put({type:"APPEND_COMPLAINT_LIST",payload: newComplaint})
    }catch(e){
        yield put({type:"ERROR", payload: e, error:true
        });
    }
}

export function* editComplaintByForm(action: RequestEditComplaint){

    try{
        const newComplaint: ComplaintFormState = yield editComplaint(action.payload);
        yield put({type:"EDIT_COMPLAINT",payload: newComplaint})
    }catch(e){
        yield put({type:"ERROR", payload: e, error:true
        });
    }
}

export function* getAllMeetingsInfo(){

    try{
        
        const meetingList: MeetingFormState[] = yield getAllMeetings();
        yield put({type:"REFRESH_MEETING_LIST",payload: meetingList})
    }catch(e){
        yield put({type:"ERROR", payload: e, error:true
        });
    }
}

export function* getAllComplaintsInfo(){

    try{
        
        const complaintList: ComplaintFormState[] = yield getAllComplaints();
        yield put({type:"REFRESH_COMPLAINT_LIST",payload: complaintList})
    }catch(e){
        yield put({type:"ERROR", payload: e, error:true
        });
    }
}

export function* loginByForm(action: RequestLogin){

    try{
        
        const response: boolean = yield login(action.payload);
        
        yield put({type:"HANDLE_LOGIN_RESPONSE",payload: response})
    }catch(e){
        yield put({type:"ERROR", payload: e, error:true
        });
    }
}


//watcher sagas
export function* watchRequestCreateComplaint(){
    yield takeEvery("REQUEST_CREATE_COMPLAINT",createComplaintByForm)
}
export function* watchRequestCreateMeeting(){
    yield takeEvery("REQUEST_CREATE_MEETING",createMeetingByForm)
}
export function* watchRequestEditComplaint(){
    yield takeEvery("REQUEST_EDIT_COMPLAINT",editComplaintByForm)
}
export function* watchRequestGetAllMeetings(){
    yield takeEvery("REQUEST_GET_ALL_MEETINGS",getAllMeetingsInfo)
}
export function* watchRequestLogin(){
    yield takeEvery("REQUEST_LOGIN",loginByForm)
}
export function* watchRequestGetAllComplaints(){
    yield takeEvery("REQUEST_GET_ALL_COMPLAINTS",getAllComplaintsInfo)
}

//root saga
export default function* rootSaga(){

    yield all([watchRequestCreateComplaint(),watchRequestGetAllMeetings(),watchRequestLogin(),watchRequestGetAllComplaints(),watchRequestEditComplaint(),watchRequestCreateMeeting()]) // an array of watcher sagas


}