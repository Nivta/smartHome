import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AddRoom from './components/AddRoom';
import MRoom from './components/MRoom';

export default function App() {
 
  const [rooms, setRooms] = useState([]);

  function addRoom(room) {
    
    const roomsCopy = structuredClone(rooms);
    roomsCopy.push(room);
    console.log(roomsCopy)
    setRooms(roomsCopy);
}

function findRoom(name) {
  const room = rooms.find((room) => room.roomName === name);
  return room;
}
function addProductToRoom(roomName, product) {
  const roomsCopy = structuredClone(rooms);
  const roomToEdit = roomsCopy.find((room) => room.roomName === roomName);
  roomToEdit.products.push(product);
  setRooms(roomsCopy);
}
function toggleProduct(roomName, productName) {
  const roomsCopy = structuredClone(rooms);
  console.log(roomName)
  const roomToEdit = roomsCopy.find((room) => room.roomName === roomName);
  const productToEdit = roomToEdit.products.find((product) => product.name === productName);
  productToEdit.isOn = !productToEdit.isOn;
  setRooms(roomsCopy);
}


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home rooms={rooms} />} />
        <Route path="/AddRoom" element={<AddRoom addRoom={addRoom} />} />
        <Route path="/room/:name" element={<MRoom toggleProduct={toggleProduct} addProductToRoom={addProductToRoom} findRoom = {findRoom} />} />
      </Routes>
    </BrowserRouter>
  );
}