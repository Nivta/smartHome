import React, { useState } from 'react';

export default function AddProduct(props) {
  // State לשמירה על הבחירה הנוכחית מה-<select>
  const [name, setName] = useState('');

  // פונקציה שתופסת את הערך שנבחר מה-<select>
  

  // פונקציה שתופסת את לחיצה על כפתור ההוסף


  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <select
        value={name}
        onChange={(event) => setName(event.target.value)}
        style={{ padding: '10px', fontSize: '16px' }}
      >
        <option value="">בחר מוצר</option>
        <option value="Air conditioner">Air conditioner</option>
        <option value="heater">heater</option>
        <option value="stereo">stereo</option>
        <option value="lamp">lamp</option>
      </select>
      <button
        onClick={()=>{     
          const newProduct = {
          name: name,
          isOn: false,
      };
      props.addProductToRoom(props.roomName, newProduct);}}
        style={{
          marginLeft: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        +
      </button>
    </div>
  );
}

