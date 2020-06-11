import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(prop) {
    function handleClick() {
        prop.onDelete(prop.id);
    }
    //https://img.youtube.com/vi/JvbdMX-5_Rg/default.jpg

    return(
        <div className='note'>
            <img className='thumbnail' src='https://img.youtube.com/vi/JvbdMX-5_Rg/default.jpg' />
            <h1>{prop.title}</h1>
            <p>{prop.content}</p>
            <button onClick={handleClick}><DeleteIcon /></button>
        </div>
    );
}

export default Note;