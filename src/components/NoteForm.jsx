import React from 'react'
import db from '../appwrite/databases'

function NoteForm({setNotes}) {
    const handleAdd = async (e) => {
        e.preventDefault();
        const noteBody = e.target.body.value;   
        
        if(noteBody === "")  return;

        try {
            const payload = {body: noteBody}
            const response = await db.notes.create(payload);
            setNotes((prev) => [...prev, response])

            e.target.reset();

        } catch (error) {
            throw error;
        }

    }
  return (
    <form onSubmit={handleAdd}>
      <input 
      type='text' 
      name='body'
      placeholder="🤔 What's on the agenda?" 
      />
    </form>
  )
}

export default NoteForm
