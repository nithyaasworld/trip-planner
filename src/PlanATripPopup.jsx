import { useRef } from "react";
import { databaseRef } from "./firebaseConfig";

export default function PlanATripPopup({ setShowTripPlanner, userEmail }) {
    const formRef = useRef();
    function onFormSubmit(e) {
      e.preventDefault();
        let formData = new FormData(document.querySelector('form'));
      formData.set('email', userEmail);
      databaseRef.collection('trip-info').add(Object.fromEntries(formData))
        .then((addedData) => {
          console.log('Data with id: ' + addedData.id + ' Path: ' + addedData.path + ' successfully added to DB');
          setShowTripPlanner(false);
      }).catch((e) => {
        console.error('Not able to add data to DB.', e);
      })
  }
  
    function onFormCancel(e) {
      e.preventDefault();
      setShowTripPlanner(false);
    }
  return (
    <div className="plan-a-trip-container">
      <h2>Plan a Trip</h2>
      <form ref={formRef} className="plan-a-trip-form">
        <div className="form-controls">
          <label htmlFor="title">Title: </label>
          <input name="title" type="text" id="title" className="title"></input>
        </div>
        <div className="form-controls">
          <label htmlFor="description">Description: </label>
          <input name="description" type="text" id="description" className="description"></input>
        </div>
        <div className="date-ranges-container form-controls">
          <label>Date Range: </label>
          <div className="date-ranges">
            <div className="start-ranges">
              <label htmlFor="start-input">Start date: </label>
              <input type="date" id="start-input" name="trip-start"></input>
            </div>
            <div className="end-ranges">
              <label htmlFor="end-input">End date: </label>
              <input type="date" id="end-input" name="trip-end"></input>
            </div>
          </div>
        </div>
        <div className="form-controls">
          <label htmlFor="list-of-places-input">List of places: </label>
          <input
            name="places-list"
            type="text"
            id="list-of-places-input"
            className="list-of-places-input"
          ></input>
        </div>
        <div className="form-controls">
          <label htmlFor="trip-status">Status: </label>
          <select name="trip-status" id="trip-status">
            <option value="upcoming">upcoming</option>
            <option value="completed">completed</option>
            <option value="cancelled">cancelled</option>
          </select>
        </div>
        <div className="form-controls form-btn-group">
          <button onClick={(e)=> onFormSubmit(e)} className="btn-primary">Submit</button>
          <button onClick={(e)=> onFormCancel(e)} className="btn-danger">Cancel</button>
        </div>
      </form>
    </div>
  );
}
