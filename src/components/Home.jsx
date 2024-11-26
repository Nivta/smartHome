import React, { useState } from 'react';
import "../style/Home.css";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
    const nav = useNavigate();
  
    return (
        <div className="container">
            <h1 className="title">Smart Home</h1>
            {props.rooms.map((room, index) => (
                <div 
                    className='room' 
                    key={index} 
                    style={{ backgroundColor: room.roomColor }}
                    onClick={()=>{
                        nav("/room/"+room.roomName);
                    }}
                >
                    {room.roomName}
                    
                </div>
            ))}
            <button onClick={() => nav("/AddRoom")} className="button">+</button>
        </div>
    );
}