import './App.css';
import React, { useState } from "react";

function App() {
  const [link, setlink] = useState('');

  const handleInput = (e) => {
    setlink(e.target.value)
  }

  const handleClick = () => {
    // this function runs when u click download button 
    alert("Dafuq man?")
  }
  return (
    <div className='main-c'>
      <nav className='navbar'>
        <p>Musiqaa Ḍā'unalōḍāra</p>
      </nav>
      <div className="search-box">
        <input type="text" placeholder="Paste the link here..." name='da-link' onChange={(e) => handleInput(e)}/>
      </div>
      <div className="btn-c">
        <button className="download-btn" onClick={() => handleClick()}>Download</button>

      </div>
    </div>
    
  );
}

export default App;