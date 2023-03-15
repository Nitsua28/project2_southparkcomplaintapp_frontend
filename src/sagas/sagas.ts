import {takeEvery, put, all} from "@redux-saga/core/effects"
//worker sagas
export function* createComplaintByForm(action: RequestCreateEmployee){

    // try{
    //     action.payload.id = Math.floor(Math.random()*1000).toString()
    //     const newEmployee: EmployeeFormState = yield createEmployee(action.payload);
    //     yield put({type:"APPEND_LIST",payload: newEmployee})
    // }catch(e){
    //     yield put({type:"ERROR", payload: e, error:true
    //     });
    //}
}



//watcher sagas
export function* watchRequestCreateEmployee(){
    yield takeEvery("REQUEST_CREATE_EMPLOYEE",createEmployeeByForm)
}

//root saga
export default function* rootSaga(){

    yield all([watchRequestCreateEmployee()]) // an array of watcher sagas


}