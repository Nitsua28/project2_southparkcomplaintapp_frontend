export type MeetingFormState = {
    meeting_Id: string,
    address: string,
    time: number,
    summary: string,
    // attendees: string[],
    // speakers: string[]

}

export type UpdateAddress = {type: "UPDATE_ADDRESS", payload:string}
export type UpdatePassword = {type: "UPDATE_TIME", payload: number}
export type UpdateSummary = {type: "UPDATE_SUMMARY", payload: string}
export type AddAttendee = {type: "ADD_ATTENDEE", payload: string}
export type AddSpeaker = {type: "ADD_SPEAKER", payload: string}

export type MeetingFormActions = UpdateAddress | UpdateSummary | UpdatePassword | AddAttendee | AddSpeaker

export function MeetingFormReducer(state: MeetingFormState, action: MeetingFormActions):MeetingFormState{

const nextState: MeetingFormState = JSON.parse(JSON.stringify(state));
switch(action.type){
    case "UPDATE_ADDRESS":{
        nextState.address = action.payload;
        return nextState
    }
    case "UPDATE_TIME":{
        nextState.time = action.payload;
        return nextState
    }
    case "UPDATE_SUMMARY":{
        nextState.summary = action.payload;
        return nextState
    }
    // case "ADD_ATTENDEE":{
    //     nextState.attendees.push(action.payload);
    //     return nextState
    // }
    // case "ADD_SPEAKER":{
    //     nextState.speakers.push(action.payload);
    //     return nextState
    // }
    
    
    default:{
        return nextState
    }
    
}
}