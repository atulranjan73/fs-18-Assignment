import { useState , useEffect} from 'react'
import SubjectDetail from './components/SubjectDetail';
import './App.css'

function App() {

  const [subject, setSubject] = useState("");
  const [hour, setHour] = useState("");
  const [allSubjects , setAllSubjects] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(subject)
    // console.log(hour)

    let copyArray = [...allSubjects ]
    console.log(copyArray)

    copyArray.push({
      subject:subject,
      hour: parseInt(hour)
    })

    setAllSubjects(copyArray)
    
  }

  // storing in local storage
  useEffect( ()=>{
    if(allSubjects.length > 0)
     localStorage.setItem("allSubjects", JSON.stringify(allSubjects));
  } , [allSubjects]);

  // displaying on display
  useEffect( ()=>{
    if(localStorage.getItem("allSubjects")){
      let array = JSON.parse(localStorage.getItem("allSubjects"));

      setAllSubjects(array);

    }
  },[])



  const increaseHour = (index)=>{
     let copyArray = [...allSubjects];

     copyArray[index]["hour"] += 1; 
     setAllSubjects(copyArray);
  }

  const decreaseHour = (index)=>{
    let copyArray = [...allSubjects];
    copyArray[index]["hour"] -= 1; 
    setAllSubjects(copyArray);

  }


  return (
    <>
      <div className='container'>
        <h1>📗 Geekster Education Planner 📝</h1>
        <form action="" onSubmit={handleSubmit}>
          <input onChange={(e) => setSubject(e.currentTarget.value)} type="text" name="" id="" placeholder='subject' />
          <input onChange={(e) => setHour(e.currentTarget.value)} type="number" name="" id="" placeholder='Hour' />
          <input type="submit" value="Add" className='addbutton'/>
        </form>

        {
          allSubjects.map( (sub , index)=>{
            return <div className='resultDiv'>
              <SubjectDetail 
            subject={sub.subject} 
            hour={sub.hour} 
            key={index} 
            increase={increaseHour}
            decrease={decreaseHour}
            index={index}
            />
            </div>
          })
        }

     
      </div>
    </>
  )
}

export default App