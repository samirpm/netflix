import React from 'react';
import NavBar from './Components/NavBar';
import './App.css'
import Banner from './Components/Banner';
import Rowpost from './Components/Rowpost';
import requests from './Request';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Rowpost poster url={requests.originals} title="Netflix Orginals" isLarge />
      <Rowpost url={requests.romance} title="Trending" isSmall />
      <Rowpost url={requests.action} title="Action Movies" isSmall />
      <Rowpost url={requests.comedy} title="Comedy Movies" isSmall />
      <Rowpost url={requests.horror} title="Horror Movies" isSmall />
      <Rowpost url={requests.trending} title="Romance" isSmall />
      <Rowpost url={requests.documentaries} title="Documentaries" isSmall />

    </div>
  );
}

export default App;
