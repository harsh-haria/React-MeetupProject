import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
  let [userFavourites, setUserFavourites] = useState([]);

  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourites((prevUserFavourties) => {
      return prevUserFavourties.concat(favouriteMeetup);
    });
  }

  function removeFavouriteHandler(meetupId) {
    setUserFavourites((prevUserFavourties) => {
      return prevUserFavourties.filter((item) => item.id !== meetupId);
    });
  }

  function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some((item) => item.id === meetupId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
