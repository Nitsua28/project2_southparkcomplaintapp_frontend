export type ComplaintFormState = {
    complaint_id: string,
    title: string,
    description: string,
    status: string,
    priority: string
}

export type UpdateTitle = {type: "UPDATE_TITLE", payload:string}
export type UpdateDescription = {type: "UPDATE_DESCRIPTION", payload:string}
export type UpdateStatus = {type: "UPDATE_STATUS", payload: string}
export type UpdateMeeting = {type: "UPDATE_MEETING", payload: string}
export type UpdatePriority = {type: "UPDATE_PRIORITY", payload: string}

export type ComplaintFormActions = UpdateTitle | UpdateDescription | UpdateStatus | UpdateMeeting | UpdatePriority

export function ComplaintFormReducer(state: ComplaintFormState, action: ComplaintFormActions):ComplaintFormState{

const nextState: ComplaintFormState = JSON.parse(JSON.stringify(state));
switch(action.type){
    case "UPDATE_TITLE":{
        nextState.title = action.payload;
        return nextState
    }
    case "UPDATE_DESCRIPTION":{
        nextState.description = action.payload;
        return nextState
    }
    case "UPDATE_STATUS":{
        nextState.status = action.payload;
        return nextState
    }
    case "UPDATE_PRIORITY":{
        nextState.priority = action.payload;
        return nextState
    }
    
    
    default:{
        return nextState
    }
    
}
}