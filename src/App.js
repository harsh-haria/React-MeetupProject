import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavouritesPage from "./pages/Favourites";    

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/fav" element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
