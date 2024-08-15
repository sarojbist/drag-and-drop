import React, { useState } from 'react';
import Card from './Card';

export default function Canvas() {
  const [cards, setCards] = useState([{ 
    text: "You can click on Add Card button to add more draggable cards. You can drag the cards anywhere in the screen. Isn't it a fun? ", 
    x: 50, 
    y: 50 
  }]);
  const [openUserInput, setOpenUserInput] = useState(false);
  const [newCardText, setNewCardText] = useState('');


  const addCard = () => {
setOpenUserInput(true);
    const newCard = { 
      text: "This is a dummy text that needs to be partially shown with a show more button", 
      x: 50, 
      y: 50 
    };
    setCards([...cards, newCard]);
    setOpenUserInput(false);
  };

const handleCloseBox = () => {
    setOpenUserInput(false)
}
const addNewCard = () => {
    setOpenUserInput(false);

    const newCard = {
        text: newCardText,
        x: 50,
        y: 50
    };
    // let's pass it to state
    setCards([...cards, newCard]);
    setNewCardText("");
   

}
const handelChange = (e) => {
setNewCardText(e.target.value);
}
  return (
    <div className="w-full h-screen bg-red-200  overflow-scroll">
      <button
        onClick={() => {setOpenUserInput(true)}}
        className="m-[10px] px-4 py-2 bg-blue-500 text-white rounded">
        Add Card
      </button>
{
    openUserInput && ( 
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md absolute left-4 z-50">
        <button onClick={addCard} className="px-4 py-2 bg-gray-500 text-white rounded">Add Default Card</button>
        <h2 className="text-lg font-semibold mb-4">Add New Card</h2>
        <textarea
          value={newCardText}
          onChange={handelChange}
          className="w-full p-2 border rounded-lg mb-4"
          placeholder="Enter card text here..."
        ></textarea>
        <div className="flex justify-end space-x-2">
          <button onClick={handleCloseBox} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
          <button onClick={addNewCard} className="px-4 py-2 bg-blue-500 text-white rounded">Add Card</button>
        </div>
      </div>)
}

      <div className="w-full h-full ">
        {cards.map((card, index) => (       
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}
