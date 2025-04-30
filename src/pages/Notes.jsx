import React, { useEffect, useState } from 'react'
import db from '../appwrite/databases';
import NoteForm from '../components/NoteForm';
import { Query } from 'appwrite';
import Note from '../components/Note';


function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    init();
  },[])

  const init = async ()=> {
    try {
        // const response = await databases.listDocuments(
        //   import.meta.env.VITE_APPWRITE_DATABASE_ID,
        //   import.meta.env.VITE_APPWRITE_COLLECTION_ID
        // )
        const response = await db.notes.list(
          [Query.orderDesc('$createdAt')]
        )
        setNotes(response.documents); 
    } catch (error) {
      throw error;
    }
  }

  return (
    <div>
        <NoteForm setNotes={setNotes}/>
      <div>
        {notes.map((note)=> (
          <Note key={note.$id} setNotes ={setNotes} NoteData={note} />
      
        ))}
      </div>
    </div>
  )
}

export default Notes
