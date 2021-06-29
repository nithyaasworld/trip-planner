import { useEffect, useState } from "react";
import { databaseRef } from "./firebaseConfig";
import PlanATripPopup from "./PlanATripPopup";
import PlaceCard from "./PlaceCard";
import { useHistory } from "react-router-dom";

export default function ProfilePage({userName, userImage, userEmail}) {
    let [showTripPlanner, setShowTripPlanner] = useState(false);
    let [placesVisited, setPlacesVisited] = useState({});
    let history = useHistory();
    useEffect(() => {
        const fetchData = async () => {
            const docs = await databaseRef.collection('trip-info').get();
            let places = [];
            docs.forEach(doc => console.log(doc.id, '=>', places.push(doc.data())));
            setPlacesVisited(places);
        }
        fetchData();
    }, [])
    return (
        <div className="profile-page-container">
            <div className="user-core-details">
                <img src={userImage || "https://picsum.photos/200"} alt="user avatar"></img>
                <p>{userName}</p>
                <div className="buttons">
                    <button onClick={() => history.push('/trips-list')} className="btn-primary">Show all Trips</button>
                    <button onClick={()=>setShowTripPlanner(true)} className="btn-primary">Plan a trip</button>
                </div>
            </div>
            <div className="places-user-has-visited">
                <h2>Places you have been to:</h2>
                <div className="place-header">
                    <p className="place-title">Title</p>
                    <p className="places-visited">List of places visited</p>
                    <p className="time-visited">Visited date</p>
                    <p className="hidden">Show Details</p>
                </div>
               {placesVisited.length > 0 && placesVisited.map(place => <PlaceCard title={place.title} places={place["places-list"]} endTime={place["trip-end"]} />)}
            </div>
            {showTripPlanner && <PlanATripPopup setShowTripPlanner={setShowTripPlanner} userEmail={userEmail} />}
        </div>
    )
}