// import InputField from "../components/layout/InputField";
// import InputTextArea from "../components/layout/InputTextArea";
// import Button from "../components/layout/InputButton";
// import { useHistory } from "react";
import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

// import classes from "./NewMeetup.module.css";

function NewMeetupsPage(props) {
  const navigate = useNavigate();
  async function addMeetupHandler(meetupData) {
    let apiCall = await fetch(
      "<LINK>",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    navigate("/", { replace: true });
  }

  return (
    <div>
      <h1>New Meetup Form!</h1>
      <hr></hr>
      <br></br>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupsPage;
