import DoneIcon from '@mui/icons-material/Done';
import FavoriteIcon from '@mui/icons-material/Favorite';
const FilteredNote = ({toggleImportantOf, noteObjectSingle, del}) => {

    let d = noteObjectSingle.date;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = (new Date(d).toLocaleDateString('de-DE', options));

   
 

    const styleRED = {
        "background-color":" #D94A4A "
    } 
    
    
    const styleGREEN = {
        "background-color":" #ebc27b "
    } 
    
          const haveNOTImportantStyle = noteObjectSingle.important ? styleRED : styleGREEN
    
    

    return(

        <div  key={noteObjectSingle.id}>
    

        <h5>{today}</h5>
    
        <div  className="each-note">
      
        <p>{noteObjectSingle.note}</p>

        <div className="button-action">
     <FavoriteIcon style={haveNOTImportantStyle} className="icon  icon-red" onClick={toggleImportantOf} />

     <DoneIcon className="icon" type="checkbox"  onClick={() => {del(noteObjectSingle.id)}} />
     </div>
        </div>
        </div>
    
    )
}

export default FilteredNote