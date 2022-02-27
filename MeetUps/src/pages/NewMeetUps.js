import NewMeetupForm from "../components/MeetUps/NewMeetUpForm";
import { useHistory } from "react-router-dom";
function NewMeetupPage() {
  const history = useHistory();
  const addMeetUpHandler = (meetUpData) => {
    fetch("https://meetups-8ed01-default-rtdb.firebaseio.com/meetUps.json", {
      method: "POST",

      body: JSON.stringify(meetUpData),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetUp={addMeetUpHandler} />
    </section>
  );
}

export default NewMeetupPage;
