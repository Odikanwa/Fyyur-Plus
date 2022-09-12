import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import UserAccounts from "./pages/accounts/useraccounts/UserAccounts";
import ArtistAccounts from "./pages/accounts/artistaccounts/ArtistAccounts";
import LessorAccounts from "./pages/accounts/lessoraccounts/LessorAccounts";
import Artists from "./pages/artists/Artists";
import Artist from "./pages/artist/Artist";
import Shows from "./pages/shows/Shows";
import Show from "./pages/show/Show";
import Venues from "./pages/venues/Venues";
import Venue from "./pages/venue/Venue";
import ArtistSignUpForm from "./pages/forms/ArtistSignUpForm";
import LessorSignUpForm from "./pages/forms/LessorSignUpForm";
import UserSignUpForm from "./pages/forms/UserSignUpForm";
import LoginForm from "./pages/forms/LoginForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts/useraccounts/:id" element={<UserAccounts />} />
        <Route
          path="/accounts/artistaccounts/:id"
          element={<ArtistAccounts />}
        />
        <Route
          path="/accounts/lessoraccounts/:id"
          element={<LessorAccounts />}
        />
        <Route path="/artists" element={<Artists />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/artists/:id" element={<Artist />} />
        <Route path="/shows/:id" element={<Show />} />
        <Route path="/venues/:id" element={<Venue />} />
        <Route path="/forms/artistsignupform/" element={<ArtistSignUpForm />} />
        <Route path="/forms/lessorsignupform/" element={<LessorSignUpForm />} />
        <Route path="/forms/usersignupform/" element={<UserSignUpForm />} />
        <Route path="/forms/loginform/" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
