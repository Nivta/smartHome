import React, { useState } from 'react';
import "../style/AddRooms.css";
import { useNavigate } from "react-router-dom";

export default function AddRoom(props) {
  // הגדרת state עבור הערכים
  const [selectedRoom, setSelectedRoom] = useState('');
  const [roomName, setRoomName] = useState('');
  const [roomColor, setRoomColor] = useState('');
  const nav = useNavigate();
  return (
    <div className="container">
      <h1 className="title">Smart Home</h1>
      <select
        className="select"
        value={selectedRoom}
        onChange={(event) => setSelectedRoom(event.target.value)}
      >
        <option value="">Select a room</option>
        <option value="bedroom">Bedroom</option>
        <option value="bathroom">Bathroom</option>
        <option value="kitchen">Kitchen</option>
      </select>
      <input
        className="input"
        type="text"
        placeholder="Room name"
        value={roomName}
        onInput={(event) => setRoomName(event.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Room color"
        value={roomColor}
        onInput={(event) => setRoomColor(event.target.value)}/>
      <button
        className="create-room"
        onClick={() => {
        //   console.log("Selected Room:", selectedRoom);
        //   console.log("Room Name:", roomName);
        //   console.log("Room Color:", roomColor);
        if(roomName.length>0&&roomName.length<=9)
        {
            const newRoom=
            {
                selectedRoom : selectedRoom,
                roomName : roomName,
                roomColor : roomColor,
                products : []
            }
            console.log(newRoom); 
            props.addRoom(newRoom);
        }
        else
            alert("Invalid room name")
        nav("/")
        }}
      >
        Create
      </button>
    </div>
  );
}

