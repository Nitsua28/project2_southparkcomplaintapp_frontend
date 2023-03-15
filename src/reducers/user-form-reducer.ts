export type UserFormState = {
    user_id: string,
    username: string,
    password: string,
    role: string
}

export type UpdateUsername = {type: "UPDATE_USERNAME", payload:string}
export type UpdatePassword = {type: "UPDATE_PASSWORD", payload: string}
export type UpdateRole = {type: "UPDATE_ROLE", payload: string}

export type UserFormActions = UpdateUsername | UpdateRole | UpdatePassword

export function UserFormReducer(state: UserFormState, action: UserFormActions):UserFormState{

const nextState: UserFormState = JSON.parse(JSON.stringify(state));
switch(action.type){
    case "UPDATE_USERNAME":{
        nextState.username = action.payload;
        return nextState
    }
    case "UPDATE_PASSWORD":{
        nextState.password = action.payload;
        return nextState
    }
    case "UPDATE_ROLE":{
        nextState.role = action.payload;
        return nextState
    }
    
    
    default:{
        return nextState
    }
    
}
}