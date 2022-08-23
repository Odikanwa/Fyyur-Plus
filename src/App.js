import React from "react";
import { 
  BrowserRouter as Router, 
  Routes,
  Route,
} from "react-router-dom"
import Home from './pages/home/Home';
import Account from "./pages/account/Account";
import Artists from "./pages/artists/Artists";
import Artist from "./pages/artist/Artist";
import Shows from "./pages/shows/Shows";
import Show from "./pages/show/Show";
import Venues from "./pages/venues/Venues";
import Venue from "./pages/venue/Venue"

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/artists" element={<Artists/>}/>
        <Route path="/shows" element={<Shows/>}/>
        <Route path="/venues" element={<Venues/>}/>
        <Route path="/artists/:id" element={<Artist/>}/>
        <Route path="/shows/:id" element={<Show/>}/>
        <Route path="/venues/:id" element={<Venue/>}/>
      </Routes>
    </Router>
  );
}

export default App;
