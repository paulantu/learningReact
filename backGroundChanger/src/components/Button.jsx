import React from "react";

function Button({title, colorName, onClick}) {
  return (
    <button 
    onClick={onClick}
    className={`outline-none px-3 py-2 rounded-full ${colorName}`}>
      {title}
    </button>
  );
}

export default Button;
