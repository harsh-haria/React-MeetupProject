import { useContext } from "react";

import FavouritesContext from "../store/favourites-context";

import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage(props) {
  const favouritesCtx = useContext(FavouritesContext);

  let content;
  if (favouritesCtx.totalFavourites === 0) {
    content = <p>Please Add some meetups as your favs!</p>;
  } else {
    content = <MeetupList Data={favouritesCtx.favourites} />;
  }

  return (
    <div>
      <h1>Favourites Page</h1>
      {content}
    </div>
  );
}

export default FavouritesPage;
