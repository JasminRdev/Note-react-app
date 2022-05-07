import SendIcon from '@mui/icons-material/Send';

const NewNotePart = ({ addNewNotePart , newNote, newDeadline, handleNote, handleDeadline }) => {

  

    return(
    <div className="containerComp new-note" >
    
    <h1>New note</h1>
  
    <div className="composeInputs">

    <div>
    <p>Note</p>
    <input className="input" type="text" onChange={handleNote} value={newNote} placeholder="..take a new note" />
    </div>

    <div>
    <p>Deadline</p>
    <input className="input" type="date" onChange={handleDeadline} value={newDeadline} />
    </div>
    

   
  <SendIcon className="button saveB" onClick={addNewNotePart}  />
  </div>
    </div>
    )
  }



export default NewNotePart


