import React, { useState } from 'react';
import '../Static/styles/sneaky.css';

const Sneaky: React.FC = () => {
    const [position, setPosition] = useState({x: 0, y: 0, z:0});

    const mouseMove = (e: React.MouseEvent<HTMLButtonElement>) =>{
        setPosition({
            x: (e.clientX - 80), 
            y: (e.clientY - 80),
            z: 0    
        });
    };

    return (
        <button className="runaway-button" style={{ top: position.y, left: position.x, zIndex: position.z }} onMouseMove={mouseMove}>
          Runaway Button
        </button>
      );
    };
    
    export default Sneaky;

