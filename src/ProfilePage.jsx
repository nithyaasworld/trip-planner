import { useState } from "react";
import PlanATripPopup from "./PlanATripPopup";

export default function ProfilePage({userName, userImage, userEmail}) {
    let [showTripPlanner, setShowTripPlanner] = useState(false);
    return (
        <div className="profile-page-container">
            <div className="user-core-details">
                <img src={userImage || "https://picsum.photos/200"} alt="user avatar"></img>
                <p>{userName}</p>
                <button onClick={()=>setShowTripPlanner(true)} className="btn-primary">Plan a trip</button>
            </div>
            <div className="places-user-has-visited">
                <h2>Places you have been to:</h2>
                <div className="place-header">
                    <p className="place-title">Title</p>
                    <p className="places-visited">List of places visited</p>
                    <p className="time-visited">Visited date</p>
                </div>
                <div className="place-card">
                    <p className="place-title">Summer Trip</p>
                    <p className="places-visited">Place1, place2, place3</p>
                    <p className="time-visited">Jan 2020</p>
                    <button className="btn-primary show-trip-detail">Show Details</button>
                </div>
                <div className="place-card">
                    <p className="place-title">Summer Trip</p>
                    <p className="places-visited">Place1, place2, place3</p>
                    <p className="time-visited">Jan 2020</p>
                    <button className="btn-primary show-trip-detail">Show Details</button>
                </div>
                <div className="place-card">
                    <p className="place-title">Summer Trip</p>
                    <p className="places-visited">Place1, place2, place3</p>
                    <p className="time-visited">Jan 2020</p>
                    <button className="btn-primary show-trip-detail">Show Details</button>
                </div>
            </div>
            {showTripPlanner && <PlanATripPopup setShowTripPlanner={setShowTripPlanner} userEmail={userEmail} />}
        </div>
    )
}