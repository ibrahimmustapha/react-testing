import React from 'react';
import './App.css';
import Layout from './components/layout'

const fakedata = [
  {
    id: 1, 
    name: 'Karim Benzima',
    age: 33,
    team: "RM"
  },
  {
    id: 2, 
    name: 'Cristiano Ronaldo',
    age: 37,
    team: "MUN"
  },
  {
    id: 3, 
    name: 'Leonel Messi',
    age: 35,
    team: "PSG"
  },
  {
    id: 4, 
    name: 'Kylian Mbappe',
    age: 24,
    team: "PSG"
  },
]


function App() {
  return (
    <div> 
      <h4>React JavaScript</h4>
        {fakedata.map((data) => {
          return (
            <div key={data.id}>
            <p>{data.id}</p>
            <p>{data.name}</p>
            <p>{data.team}</p>
            <p>{data.age}</p>
            </div>
          )
        })}
      <Layout 
      firstname="World" 
      secondname="Africa" 
      thirdname="Ghana" 
      />
    </div>
  )
}

export default App;
