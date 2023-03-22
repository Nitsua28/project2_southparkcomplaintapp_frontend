import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Popup from "reactjs-popup"
import { MeetingList } from "../components/meeting-list"
import { LoginForm, SouthParkActions, SouthParkState } from "../reducers/south-park-reducer"
import { LeftVerticalBanner } from "../stylecomponents/left-vertical-banner"
import { RightVerticalBanner } from "../stylecomponents/right-vertical-banner"
import { TopBanner } from "../stylecomponents/top-banner"
import "../stylesheets/unregistered-page-style.css"


// const ControlledPopup = (props: SouthParkState) => {  
//     const router = useNavigate();
//     const [open, setOpen] = useState(false); 
//     const closeModal = () => setOpen(false);
//     return (    
//     <div>      
//         <button type="button" className="" onClick={() => setOpen(o => !o)}>
//         Controlled Popup      
//         </button>      
//         <Popup open={open} closeOnDocumentClick position= 'top left' onClose={()=>(props.currentUserId != "") ? router("/council") :closeModal}>        
//             <div className="modal">          
//                 <a className="close" onClick={closeModal}>
//                     &times;          
//                 </a>          
//                 {(props.currentUserId != "")  ? <h1>logged in</h1> : <h1>login error</h1>}
//             </div>      
//         </Popup>   
//     </div>  
//     );};
export function UnregisteredPage(){
    const [LoginFormState, setLogin] = useState<LoginForm>({
        username: "",
        password: ""
    })
    const router = useNavigate();
    const [open, setOpen] = useState(false); 
    const closeModal = () => setOpen(false);

    const store = useSelector((store:SouthParkState) => store);
    const dispatch = useDispatch()<SouthParkActions>;

    
    function handleLogin(){
        console.log(LoginFormState)
        dispatch({type:"REQUEST_LOGIN", payload:LoginFormState})
        setOpen(o => !o);
        
    }
    return(
<>
    <Popup open={open} closeOnDocumentClick position= 'bottom right' onClose={()=>(store.currentUserId != "") ? router("/council") :closeModal}>        
        {/* <div className="modal">          
            <a className="close" onClick={closeModal}>
                &times;          
            </a>          
            {(store.currentUserId != "")  ? <h1>logged in</h1> : <h1>login error</h1>}
        </div>       */}
        <div className="modal-container">
            <div className="modal-content">
                <a className="close-button" onClick={closeModal}>
                    &times;          
                </a>  
                <h2 className="response-heading">Login Response</h2>
                {(store.currentUserId != "")  ? <p className="response-message">Your login was successful!</p> : <p className="response-message">Login Error</p>}
                
            </div>
        </div>

    </Popup>   
    <video src='sunrise.mp4' autoPlay muted/>
    <LeftVerticalBanner/>
    <RightVerticalBanner/>
    <TopBanner/>
    <div className="unregister-page-parent-container">
        
        <div className="unregister-page-container">
            
            <div className="unregister-page-report-complaint-container">
                <div className="unregister-page-report-complaint-button-container">
                    
                </div>
            </div>
            <div className="unregistered-page-meetings-container">
                <div className="unregistered-page-meetings-list-container">
                    <div className="unregistered-page-meetings-list-header-container">
                        <h1>Meetings</h1>
                    </div>
                    <div className="unregistered-page-meetings-list-list-container">
                        <MeetingList/>
                    </div>
                 </div>
            </div>
            <div className="unregistered-page-login-container">
                <div className="unregistered-page-login-box-container">
                    <div className="unregistered-page-login-header-container">
                        <h1>Login</h1>
                        <div>      
                                  
                            
                        </div>  
                    </div>
                    <div className="unregistered-page-login-username-container">
                        <input onChange={(e)=>setLogin({...LoginFormState, username:e.target.value})}></input>
                    </div>
                    <div className="unregistered-page-login-password-container">
                    <input onChange={(e)=>setLogin({...LoginFormState, password:e.target.value})}></input>
                    </div>
                    <div className="unregistered-page-login-button-container">
                    <button type="button" className="" onClick={handleLogin}>
                            Login     
                    </button>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
    )
}