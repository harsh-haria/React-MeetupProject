import MeetupItem from "./MeetupItem";
function MeetupList(props) {
  return (
    <div className="d-flex justify-content-center container-fluid">
      {props.Data.map((meetupItem) => {
        return (
          <div>
            <MeetupItem
              title={meetupItem.title}
              address={meetupItem.address}
              description={meetupItem.description}
              image={meetupItem.image}
              id={meetupItem.id}
            ></MeetupItem>
          </div>
        );
      })}
    </div>
  );
}

export default MeetupList;
