import io from 'socket.io-client';
import { React, useState } from 'react';
import Authentication from './Authentication';
import SearchCountry from './SearchCountry'
import { Table } from './Table.js';

import './App.css';

// Establish and connect to socket connection
const socket = io();

// Main driver function
function App() {
  const [Area, setArea] = useState([]);
  return (
    <div className="App">
      <Authentication socket={socket} />
      <SearchCountry />
      <Table Area={Area} setArea={setArea} />
    </div>
  );
}
export default App;
