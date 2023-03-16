import {takeEvery, put, all} from "@redux-saga/core/effects"
import { createComplaint, getAllMeetings } from "../api/requests";
import { ComplaintFormState } from "../reducers/complaint-form-reducer";
import { MeetingFormState } from "../reducers/meeting-form-reducer";
import { RequestCreateComplaint, RequestGetAllComplaints } from "../reducers/south-park-reducer"
//worker sagas
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

export function* getAllMeetingsInfo(){

    try{
        
        const meetingList: MeetingFormState[] = yield getAllMeetings();
        yield put({type:"REFRESH_MEETING_LIST",payload: meetingList})
    }catch(e){
        yield put({type:"ERROR", payload: e, error:true
        });
    }
}



//watcher sagas
export function* watchRequestCreateComplaint(){
    yield takeEvery("REQUEST_CREATE_COMPLAINT",createComplaintByForm)
}
export function* watchRequestGetAllMeetings(){
    yield takeEvery("REQUEST_GET_ALL_MEETINGS",getAllMeetingsInfo)
}

//root saga
export default function* rootSaga(){

    yield all([watchRequestCreateComplaint(),watchRequestGetAllMeetings()]) // an array of watcher sagas


}