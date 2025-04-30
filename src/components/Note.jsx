import React from 'react'
import { useState } from 'react'
import db from '../appwrite/databases';
import DeleteIcon from '../assets/deleteIcon';


function Note({NoteData, setNotes}) {
    const [note,setNote] = useState(NoteData);

    const handleUpdate = async () => {
        const completed = !note.conmpleted;
        db.notes.update(note.$id, {completed});
        setNote({...note, completed: completed});
    };

    const handleDelete =  async () => {
        db.notes.delete(note.$id);
        setNotes((prevState) => prevState.filter((i)=> i.$id !== note.$id));
    }



  return (
    <div>
      <span onClick={handleUpdate}>
        {note.completed? <s> {note.body} </s> : <> {note.body} </>}
      </span>

      <div onClick={handleDelete}>
        <DeleteIcon />
      </div>
    </div>
  )
}

export default Note
 