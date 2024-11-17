import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [ footballers, setFootballers ] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFootballers(data))
  }, [])

  // const footballers = [{name:'Messi', age:38, goal:108}, {name:'Ronaldo', age:42, goal:98}, {name:'Neymar', age:32, goal:89}, {name:'Embappe', age:29, goal:83}]

  return (
    <div className="App">
     <StadiumFootball></StadiumFootball>
      {
        footballers.map(ftblr => <Footballer name={ftblr.name} 
          key={ftblr.id} age={ftblr.age} goal={ftblr.goal}></Footballer>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function FootballDisplay(props){
  return <h4>Matches are displayed:{props.matches}</h4>
}

function Footballer(props){
  const footballerStyle = {
    border: '2px solid salmon',
    margin: '20px'
  }
  return (
    <div style = {footballerStyle}>
      <h1>Ami Footballer - {props.name}</h1>
      <h3>I have scored {props.goal} 100 goal in my {props.age} years of life</h3>
    </div>
  )
}

function StadiumFootball(){
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return(
    <div>
      <button onClick={handleClick}>New Match</button>
      <h5>Number of matches:{count}</h5>
      <FootballDisplay matches={count}></FootballDisplay>
      <FootballDisplay matches={count + 5}></FootballDisplay>
      <FootballDisplay matches={count + 10}></FootballDisplay>
      <FootballDisplay matches={count}></FootballDisplay>
    </div>
  )
}

export default App;
