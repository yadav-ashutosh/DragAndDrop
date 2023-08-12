import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [section1Items, setSection1Items] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ]);
  const [section3Items, setSection3Items] = useState([]);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('text/plain', item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetSection) => {
    e.preventDefault();
    const item = e.dataTransfer.getData('text/plain');

    if (targetSection === 1) {
      setSection1Items((prevItems) => prevItems.filter((i) => i !== item));
    } else if (targetSection === 3) {
      setSection3Items((prevItems) => [...prevItems, item]);
    }
  };

  return (
    <div className="app">
      <div className="sections-row">
        <div
          className="section"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, 1)}
        >
          <h2>Section 1</h2>
          {section1Items.map((item, index) => (
            <div
              key={index}
              className="item"
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="section empty" onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, 2)}>
          <h2>Section 2</h2>
        </div>
        <div
          className="section"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, 3)}
        >
          <h2>Section 3</h2>
          {section3Items.map((item, index) => (
            <div key={index} className="item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

