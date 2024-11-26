import React, { useState } from "react";
import "../style/Room.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import AddProduct from "./Addproduct";

export default function MRoom(props) {
    const [isAddProduct, setIsAddProduct] = useState(false);
    const nav = useNavigate()
    const params = useParams(); 
    const room = props.findRoom(params.name);
    console.log(room);

    return (
        <div className="MRoom">
            <h1>Smart Home</h1>
            <p>{room.roomName}</p>
            <p>{room.selectedRoom}</p>
            <p>{room.roomColor}</p>
            {room.products.map((product) => (
                <div
                    key={product.name} // Add a key prop for better performance
                    onClick={() => {
                        props.toggleProduct(room.roomName, product.name);
                    }}
                    style={{ width: "150px", backgroundColor: product.isOn ? "green" : "red" }}
                >
                    {product.name}
                </div>
            ))}
            <div className="button-container">
                <button className="add-product-button" onClick={() => {
                    setIsAddProduct(!isAddProduct);
                }}>
                    add
                </button>
                <button className="backToHome" onClick={() => {
                    // Define the action for the new button here
                    nav("/")
                }}>
                    exit
                </button>
            </div>
            {isAddProduct ? <AddProduct roomName={room.roomName} addProductToRoom={props.addProductToRoom} /> : ""}
        </div>
    );
}
    
