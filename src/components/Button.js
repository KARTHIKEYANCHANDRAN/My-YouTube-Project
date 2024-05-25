import React from "react";

const Button = ({name}) => {
  return (
    <div className="mx-2 my-3">
      <button className="py-1 px-3 rounded-lg bg-gray-200 mx-2 hover:bg-gray-400">
        {name}
      </button>
      
    </div>
  );
};

export default Button;
