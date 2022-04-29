import React, { useState } from 'react'
import './ListOfStudents.css'

const ListOfStudents = () => {

  const onAddStudent = (event) => {
    event.preventDefault();
    if (name && lastName) {
      const student = {
        name,
        lastName
      }
      setList([...list, student])
    }
  }

  const onRemoveStudent = (index, event) => {
    event.preventDefault(event);
    if (index > -1){
    list.splice(index, 1)
    let auxlist= [...list]
    setList(auxlist)
    }
    
  }

  const [list, setList] = useState([])

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const addName = (event) => {
    setName(event.target.value)
  }

  const addLastName = (event) => {
    setLastName(event.target.value)
  }

  return (
    <div className="center">
      <h1 className ="centered">Student List</h1>
      <form>
        <label>Name</label>
        <br></br>
        <input onChange={addName} type="text" name="name" placeholder="Your name.." />
        <br></br>
        <label>Last name</label>
        <br></br>
        <input onChange={addLastName} type="text" name="lastName" placeholder="Your last name.." />
        <br></br>
        <div className="centered"><button onClick={onAddStudent} className="centeredbutton" >add student</button></div>
        {list.map((student, index) => <div key={index}>
          <h2>{student.name}</h2>
          <h2>{student.lastName}</h2>
          <button id={index} onClick={e => { onRemoveStudent(index, e) }}>Delete</button>
        </div>)}
      </form>
    </div>
  )
}

export default ListOfStudents
