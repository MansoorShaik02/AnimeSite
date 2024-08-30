import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CurrentlyAiring from './pages/CurrentlyAiring';
import Homepage from './pages/Homepage';
import Trending from './pages/Trending';
import Navbar from './components/Navbar';
import AnimeSearch from './pages/AnimeSearch';
import AnimeDetails from './pages/AnimeDetails';
import Aniwatchapi from './pages/Aniwatchapi';
import CharacterDetails from './pages/CharacterDetails';
import Genrepage from './pages/Genrepage';
import Register from './components/Register';
import Login from './components/Login';
function App() {



  return (
    <Router>
      <Navbar></Navbar>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/search" exact element={< AnimeSearch />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/currentlyairing" element={<CurrentlyAiring />} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
          <Route path="aniwatchapi" element={<Aniwatchapi />}></Route>
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route path="/genre/:genreId" element={<Genrepage />} />
          <Route path="register" element={<Register />}></Route>



        </Routes>
      </div>
    </Router>
  );
}

export default App;
