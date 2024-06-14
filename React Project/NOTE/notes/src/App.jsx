import MDEditor from "@uiw/react-md-editor";
import { useState ,useEffect} from "react";
import Note from "./components/Note";
import './App.css'

function App() {

  const [notes, setNotes] = useState(
    localStorage.getItem("notes") === null 
    ? [
      {title: "# Enter Title Here",
      content: "# Enter Title Here",}
      ]
    : JSON.parse(localStorage.getItem("notes")) 
  )

  const [currentNote, setCurrentNote] = useState(0);

  const addNote = () => {
    setNotes([
      ...notes,
      {
        title: "# Enter Title Here",
        content: "# Enter Title Here",
      },
    ]);
  };

  const deleteNote = (index) => {
    const temp = [...notes];
    temp.splice(index, 1);
    setNotes(temp);
  };

  const changeCurrent = (index) => {
    setCurrentNote(index);
  };

  const modifyTheCurrentNote = (text) => {
    let temp = [...notes];
    temp[currentNote].content = text;
    temp[currentNote].title = text.split("\n")[0]; 
    setNotes(temp);
  };


  useEffect(()=>{
    console.log(notes.length);
    if(notes.length > 0){
     localStorage.setItem("notes",JSON.stringify(notes))
    }
  },[notes])


  // useEffect(()=>{
  //   if(localStorage.getItem("notes")){
  //     setNotes(JSON.parse(localStorage.getItem("notes")));
  //   }
  // },[])
  

  return (
    <div id="main">
      <div id="left">
      <div id="head">
      <h1>Notes</h1>
        <i class="fa-solid fa-circle-plus" onClick={addNote}></i>
      </div>
        {notes.map((item, index) => (
          <Note
            title={item.title}
            index={index}
            delNote={deleteNote}
            changeCurrent={changeCurrent}
            isSelected ={index == currentNote ? true : false}
          />
        ))}
      </div>
      <div id="right">
        <MDEditor
          value={notes[currentNote].content}
          onChange={(value) => modifyTheCurrentNote(value)}
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;