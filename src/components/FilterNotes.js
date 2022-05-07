const FilterNotes = ({ del, noteArr}) => {

const date = new Date();

console.log(date)
const customReminderTime = date;

function filterOfNotes(){ 
  noteArr.filter(o => o.date.includes(customReminderTime)
)}


function test() {
  if(filterOfNotes){
    return filterOfNotes.map(o =>  
        <div className="each-note" key={o.id}>
        <input className="check" type="checkbox"  onClick={() => {del(o.id)}} />
    <p>{o.note}</p>
    </div>
    );
  }
} 
 console.log(test())





    return(
<div className="containerComp">

<h2>Reminder on: 06.04.</h2>
{test()}


</div>
    )
}

export default FilterNotes