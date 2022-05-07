
import noteService from './service/note'
import "./style.css"

import React, { useState, useEffect } from 'react';

import Notification from './components/Notification'

import NewNotePart from './components/NewNotePart'
import AllNotes from './components/AllNotes'
import FilterAll from './components/FilterAll'
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';


import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const App = () => {
  

  const [noteArr, setNewNoteArr] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [newDeadline, setNewDeadline] = useState("");

  const [sendMessage ,setSendMessage] = useState(null);

  const [checked, setChecked] = useState(false);




useEffect(() => {
  noteService
  .getAll()
  .then(initialNote => {
    setNewNoteArr(initialNote)
  })
}, [])
  

const addNewNotePart = e => {
e.preventDefault();

const newObjectNote = {
  note:newNote,
  date: newDeadline,
  important: checked
}


noteService 
.create(newObjectNote)
.then(returnedNote => {
  setNewNoteArr(noteArr.concat(returnedNote));

  setNewNote("");
  setNewDeadline("");

})
}




const toggleImportantOf = (id) => {
  const note = noteArr.find(n => n.id === id)
  const changedImportant = {...note, important: !note.important}

  noteService
  .update(id, changedImportant)
  .then(returnedNote => {
    setNewNoteArr(noteArr.map(o => o.id !== id ? o : returnedNote))
  })
}



function del(id){
  if (window.confirm('Are you sure you completed?')){
    noteService
    .deleted(id)
    
    .then(returnedNote => {
      if(returnedNote != null){
        console.log("Item deleted")
        setNewNoteArr(noteArr.filter(o => o.id !== id));
      }

      setSendMessage("Successfully completed")
      setTimeout(() => {
        setSendMessage(null)
      }, 5000);

    });
   }
  }
  




function handleNote(event) {
  setNewNote(event.target.value)
}

function handleDeadline(event) {
  setNewDeadline(event.target.value)
}

const date = new Date();
const year = date.getFullYear();

  return(

    <div>

    <header>
      <h1>React App - Note reminder </h1> <NotificationImportantIcon fontSize="large" className="logo" />
    </header>

    <Notification message={sendMessage} />
    <div className="container">

  <div className="containerOfNotes">
 

 <FilterAll noteArr={noteArr}  
 del={del}
 toggleImportantOf={toggleImportantOf} />
 
  
<AllNotes 
noteArr={noteArr}  
del={del}
toggleImportantOf={toggleImportantOf}
/>
</div>


    <NewNotePart
    addNewNotePart={addNewNotePart} 
    newNote={newNote} 
    newDeadline={newDeadline}    
    handleNote={handleNote} 
    handleDeadline={handleDeadline}  />


  </div>

  <div id="contact" class="footer">
  <div class="nav-contacts">
      <a href="mailto: jasminreich0@gmail.com"> <AlternateEmailIcon /> </a>
      <a href="https://github.com/JasminRdev"> <GitHubIcon /> </a>
      <a href="https://twitter.com/Jasmin_Rdev"> <TwitterIcon /> </a>
      <a href="https://www.linkedin.com/in/jasmin-reich-217148212/"> <LinkedInIcon /> </a>
  </div>
  <p>© {year} Jasmin R.</p>
</div>

  </div>
  )
}

export default App