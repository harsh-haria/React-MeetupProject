import { useContext } from "react";

import FavouritesContext from "../../store/favourites-context";

import { Card } from "reactstrap";

function MeetupItem(props) {
  const favouritesCtx = useContext(FavouritesContext);

  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

  function toggleFavouriteStatusHandler() {
    // console.log("bruh");
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      var item = {
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      };
      favouritesCtx.addFavourite(item);
    }
  }

  return (
    <Card
      color="dark"
      inverse
      style={{
        width: "20rem",
        margin: "1rem",
      }}
    >
      <img
        src={props.image}
        className="rounded card-img-top img-fluid"
        alt={props.id}
        width="200px"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.address}</h6>
        <p className="card-text">{props.description}</p>
        <p className="card-text">{props.children}</p>
        <button
          className="btn btn-primary"
          onClick={toggleFavouriteStatusHandler}
        >
          {itemIsFavourite ? "Remove Favourite" : "Add to Favourites"}
        </button>
      </div>
    </Card>
  );
}

export default MeetupItem;
