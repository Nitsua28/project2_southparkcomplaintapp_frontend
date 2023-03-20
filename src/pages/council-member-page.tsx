import { ComplaintsList } from "../components/complaints-list";
import { MeetingList } from "../components/meeting-list";
import { LeftVerticalBanner } from "../stylecomponents/left-vertical-banner";
import { RightVerticalBanner } from "../stylecomponents/right-vertical-banner";
import { TopBanner } from "../stylecomponents/top-banner";
import "../stylesheets/council-member-page-style.css"

export function CouncilMemberPage(){
    return(
    <>
      <video src='sunrise.mp4' autoPlay muted/>
      <LeftVerticalBanner/>
      <RightVerticalBanner/>
      <TopBanner/>
      <div className="council-member-parent-container">
        <div className="council-member-container">
          <div className="council-member-meetings-container">
            <div className="council-member-meetings-list-container">
              <div className="council-member-meetings-list-header-container">
                <h1>Meetings</h1>
              </div>
              <div className="council-member-meetings-list-list-container">
                <MeetingList/>
              </div>
            </div>
          </div>
          <div className="council-member-complaints-container">
            <div className="council-member-complaints-list-container">
              <div className="council-member-complaints-list-header-container">
                <h1>Complaints</h1>
              </div>
              <div className="council-member-complaints-list-list-container">
                <ComplaintsList/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}