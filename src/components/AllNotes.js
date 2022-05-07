import AllNewNotes from './AllNewNotes'

const AllNotes = ({ noteArr, del, toggleImportantOf }) => {

   const mapNote =  noteArr.map((noteObjectSingle) => (
        <AllNewNotes 
        toggleImportantOf={() => toggleImportantOf(noteObjectSingle.id)} 
        del={del} 
        key={noteObjectSingle.id} 
        noteObjectSingle={noteObjectSingle} />
      ))

      
    return(

        <div className="containerComp ">
  <h2>All notes</h2>

<div className="all-note-part">  {mapNote}</div>


  </div>
  )

}

export default AllNotes