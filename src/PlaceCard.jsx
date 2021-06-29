export default function PlaceCard({ title, places, endTime }) {
  return (
    <div className="place-card">
      <p className="place-title">{title}</p>
      <p className="places-visited">{places}</p>
      <p className="time-visited">{endTime}</p>
      <button className="btn-primary show-trip-detail">Show Details</button>
    </div>
  );
}
