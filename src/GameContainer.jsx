import React, { useState } from 'react';
import BottomNavbar from './BnavBar';

const GameContainer = () => {
  const [tapCount, setTapCount] = useState(0);

  const handleTap = (x, y) => {
    setTapCount(tapCount + 1);
    // Implement tap indicator logic here if needed
  };

  return (
    <div id="game-container">
      <div id="coin-container">
        <img src="bcoin.png" alt="Coin Icon" id="coin-icon" />
        <span id="tap-count">{tapCount}</span>
      </div>

      <div id="image-container" onClick={(e) => handleTap(e.clientX, e.clientY)}>
        <img src="b.png" alt="Center Image" id="center-image" />
      </div>

      <BottomNavbar />
    </div>
  );
};

export default GameContainer;
