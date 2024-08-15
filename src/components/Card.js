import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'; 

export default function Card({ card }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleShowMore = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Draggable defaultPosition={{ x: card.x, y: card.y }}>
      <div className="relative">
       
        
            {isPopupOpen ? (
              <div className="max-w-[300px] h-full bg-white p-4 rounded-lg shadow-md">             
                  <p>{card.text}</p>
                  <button onClick={handleClosePopup} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
              </div>
            ): (  <div className="w-[200px] h-full bg-white p-4 rounded-lg shadow-md">
                <p>{card.text.slice(0, 30)}...</p>
                <button onClick={handleShowMore} className="text-blue-500">Show More</button>
            </div>) }
        
       
      </div>
    </Draggable>
  );
}
