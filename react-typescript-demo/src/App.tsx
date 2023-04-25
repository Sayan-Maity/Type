import { useState } from 'react';
import './App.css';
import Greet from './component/Greet';
import Person from './component/Person';
import PersonList from './component/PersonList';
import Status from './component/Status';
import Heading from './component/Heading';
import Oscar from './component/Oscar';
import Component from './component/Component';

function App() {

  const personInfo = {
    firstName: "Sayan",
    lastName: "Maity",
  }

  const listInfo = [
    {
      first: "Bruce",
      last: "Lee",
    },
    {
      first: "Nabanita",
      last: "Maity",
    },
    {
      first: "Anom",
      last: "Chak",
    },
  ]

  return (
    <div className="App">
      
      <Greet name = "Sayan" isLoggedIn={true}/>
      <Person name={personInfo}/>
      <PersonList name={listInfo}/>
      <Status name="error"/>
      <Heading>PlaceHolder Text</Heading>

      <Oscar>
        <Component> This is the component </Component>
      </Oscar>
    
    </div>
  );
}

export default App;
