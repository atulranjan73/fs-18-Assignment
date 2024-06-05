function SubjectDetail( {subject , hour , increase , decrease ,index}){
    return(
      <>
      <div className="subjectsDiv">
          <p>{subject}</p>
          <p>{hour} Hours</p>
          <button className="button" onClick={ ()=> increase(index)}>+</button>
          <button className="button" onClick={ ()=> decrease(index)}>-</button>
  
      </div>
      </>
    )
  }
  export default SubjectDetail;