import FilteredNote from './FilteredNote'

const FilterAll =({noteArr, del, toggleImportantOf }) =>{


    const mapNote = noteArr.filter(o => o.important === true);

    const mapNotes = mapNote.map((noteObjectSingle) => (
        <FilteredNote 
        toggleImportantOf={() => toggleImportantOf(noteObjectSingle.id)} 
        del={del} 
        key={noteObjectSingle.id} 
        noteObjectSingle={noteObjectSingle} />
      ))

    return(
        <div className="containerComp ">
  <h2>Important</h2>

<div className="all-note-part">  {mapNotes}</div>


  </div>
    )
}

export default FilterAll