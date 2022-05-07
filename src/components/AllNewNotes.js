import DoneIcon from '@mui/icons-material/Done';
import FavoriteIcon from '@mui/icons-material/Favorite';

const AllNewNotes = ({toggleImportantOf, noteObjectSingle, del }) => {
    let d = noteObjectSingle.date;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = (new Date(d).toLocaleDateString('de-DE', options));


const styleRED = {
    "background-color":" #D94A4A "
} 


const styleGREEN = {
    "background-color":" #D94A4A50 "
} 



      const haveNOTImportantStyle = noteObjectSingle.important ? styleRED : styleGREEN



return(

    <div  key={noteObjectSingle.id}>
    

    <h5>{today}</h5>

    <div  className="each-note">
    <p>{noteObjectSingle.note}</p>
    <div className="button-action">
 <FavoriteIcon className="icon  icon-red" style={haveNOTImportantStyle} onClick={toggleImportantOf} />
 <DoneIcon className="icon" onClick={() => {del(noteObjectSingle.id)}} />
 </div>
    </div>
    </div>

)


}

export default AllNewNotes