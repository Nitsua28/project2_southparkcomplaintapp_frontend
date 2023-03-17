import { MeetingList } from "../components/meeting-list";
import "../stylesheets/council-member-page-style.css"

export function CouncilMemberPage(){
    return(
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

      </div>
      <div className="council-member-complaints-list-list-container">

      </div>
    </div>
  </div>
</div>
    );
}