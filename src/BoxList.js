import React, {useState} from 'react';
import BoxForm from './BoxForm';
import Box from './Box'

function BoxList(){
    const [box, setBox] = useState([]);
    const addBox = (newBox) => {
        setBox(box => [...box, {...newBox}]);
    }

    const remove = (id) => {
        setBox(box => box.filter(box => box.id !== id));
    }
    return(
        <div>
        <BoxForm addBox={addBox}/>
        {box.map(({id, color, height, width, remove}) => 
        <Box 
        id={id}
        key={id} 
        color={color} 
        height={height} 
        width={width} 
        remove={remove}
        />)}
        </div>
    );
}

export default BoxList;