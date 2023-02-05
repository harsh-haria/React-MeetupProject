import { useRef } from "react";

import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const formData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(formData);
  }

  return (
    <div className={classes.MainForm}>
      <form onSubmit={submitHandler}>
        <div className={classes.Card}>
          <div className={classes.inputField}>
            <label htmlFor="title">MeetupTitle</label>
            <input
              className={classes.inputFeildMargin}
              required
              type="text"
              id="title"
              placeholder="Title"
              ref={titleInputRef}
            />
          </div>
          <div className={classes.inputField}>
            <label htmlFor="image">Meetup Image</label>
            <input
              className={classes.inputFeildMargin}
              required
              type="text"
              placeholder="Image"
              id="image"
              ref={imageInputRef}
            />
          </div>
          <div className={classes.inputField}>
            <label htmlFor="image">Meetup Address</label>
            <input
              className={classes.inputFeildMargin}
              required
              type="text"
              placeholder="Address"
              id="address"
              ref={addressInputRef}
            />
          </div>
          <div className={classes.inputField}>
            <label htmlFor="image">Meetup description</label>
            <textarea
              className={classes.inputFeildMargin}
              required
              rows="5"
              placeholder="description"
              id="description"
              ref={descriptionInputRef}
            />
          </div>
          <div>
            <button className={classes.button}>Submit Form</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewMeetupForm;
