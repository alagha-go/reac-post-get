import './App.css';
import {useState} from 'react';
import Axios from 'axios';

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create/', {
      name:name, age:age, country:country, position:position, wage:wage
    }).then(()=>{
        console.log('success');
    });
  }

  const getEmployees=()=>{
    Axios.get('http://localhost:3001/employees/', 
    ).then((response)=>{
      setEmployeeList(response.data);
    });
  }

  return (
    <div className="App">
        <div className="foam">
        <label>Name:</label>
        <input type="text" onChange={(event)=> {
          setName(event.target.value);
          }}required/>
        <br/><br/>
        <label>Age:</label>
        <input type="number"onChange={(event)=> {
          setAge(event.target.value);
          }}required/>
        <br/><br/>
        <label>Country:</label>
        <input type="text" onChange={(event)=> {
          setCountry(event.target.value);
          }} required/>
        <br/><br/>
        <label>Position:</label>
        <input type="text" onChange={(event)=> {
          setPosition(event.target.value);
          }}required/>
        <br/><br/>
        <label>Wage(Year):</label>
        <input type="number" placeholder="$" onChange={(event)=> {
          setWage(event.target.value);
          }}required/>
        <br/>
        <button onClick={addEmployee}>Add Empoyee</button>
      </div>
      <div className="employees">
      <button onClick={getEmployees}>Show Employees</button>

      {employeeList.map((val, key) =>{
        return <div>
          <table id="table">
            <thead>
                <th>Name</th>
                
                <th>Age</th>
                
                <th>Country</th>
                
                <th>Position</th>
                
                <th>Wage</th>
                
            </thead>
            <tbody>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.country}</td>
              <td>{val.position}</td>
              <td>$ {val.wage}</td>
            </tbody>
        </table>
        </div>
      })}
      </div>
    </div>
  );
}

export default App;
