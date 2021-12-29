import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';

const BoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        color: '',
        height: '',
        width: ''
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addBox({...formData, id:uuid()});
        setFormData(INITIAL_STATE);
    }

        return(
        <form onSubmit={handleSubmit} className='boxForm'>
            <label htmlFor='color'>Background Color:</label>
            <input
            id='color' 
            type='text'
            placeholder='Background Color'
            value={formData.color}
            name='color'
            onChange={handleChange}
            />

            <label htmlFor='height'>Height:</label>
            <input 
            id='height'
            type='text'
            placeholder='Height'
            value={formData.height}
            name='height'
            onChange={handleChange}
            />

            <label htmlFor='width'>Width:</label>
            <input 
            id='width'
            type='text'
            placeholder='Width'
            value={formData.width}
            name='width'
            onChange={handleChange}
            />
            <button>Add a Box</button>
        </form>
        );
    }

export default BoxForm;