import { useEffect, useState } from "react";
import { databaseRef } from "./firebaseConfig";
import PlaceCard from "./PlaceCard";
export default function TripsPage() {
    let [allTrips, setAllTrips] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const docs = await databaseRef.collection('trip-info').get();
            let places = [];
            docs.forEach(doc => console.log(doc.id, '=>', places.push(doc.data())));
            setAllTrips(places);
        }
        fetchData();
    }, [])
    return (
        <div className="all-trips-details">
            <h2>All Trip details</h2>
            <div className="place-header">
                    <p className="place-title">Title</p>
                    <p className="places-visited">List of places visited</p>
                    <p className="time-visited">Visited date</p>
                    <p className="hidden">Show Details</p>
            </div>
            <div className="place-list-container">
                {allTrips.length > 0 && allTrips.map(place => <PlaceCard title={place.title} places={place["places-list"]} endTime={place["trip-end"]} />)}
            </div>
        </div>
    )
}
