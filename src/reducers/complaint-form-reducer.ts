export type ComplaintFormState = {
    complaint_id: string,
    description: string,
    status: string,
    email: string,
    phonenumber: string
}

export type UpdateDescription = {type: "UPDATE_DESCRIPTION", payload:string}
export type UpdateEmail = {type: "UPDATE_EMAIL", payload: string}
export type UpdatePhoneNumber = {type: "UPDATE_PHONENUMBER", payload: string}

export type ComplaintFormActions = UpdateDescription | UpdateEmail | UpdatePhoneNumber

export function ComplaintFormReducer(state: ComplaintFormState, action: ComplaintFormActions):ComplaintFormState{

const nextState: ComplaintFormState = JSON.parse(JSON.stringify(state));
switch(action.type){
    case "UPDATE_DESCRIPTION":{
        nextState.description = action.payload;
        return nextState
    }
    case "UPDATE_EMAIL":{
        nextState.email = action.payload;
        return nextState
    }
    case "UPDATE_PHONENUMBER":{
        nextState.phonenumber = action.payload;
        return nextState
    }
    
    
    default:{
        return nextState
    }
    
}
}