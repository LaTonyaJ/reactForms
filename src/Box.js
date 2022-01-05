import React from "react";

const Box = ({id, color, height, width, handleRemove}) => {
    const remove = () => handleRemove(id);

    return(
    <div>
        <div
        style={{backgroundColor:color, 
            height:`${height}px`, 
            width:`${width}px`}} />
        <button onClick={remove}>X</button>
    </div>
    );
}

export default Box;