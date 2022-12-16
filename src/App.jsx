import './App.css';
import React, { useState, useRef } from 'react';
import Images from './Images';
function App() {

  const [selectedImg, setSelectedImg] = useState(Images[0])

  return (
    <div className="App">
      <div className="content-area">
        <div className="container">
          <img src={selectedImg} className='selectedImg' alt="" />
        </div>
        <div className="img-content">
          {Images.map((img, index) => (
            <img key={index} src={img} alt='tantuni'
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
