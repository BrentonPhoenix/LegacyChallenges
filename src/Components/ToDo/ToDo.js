import React from 'react';
import {Container} from 'reactstrap';
import ToDo2 from './ToDo2';

const ToDo = () => {
  return(
    <Container className="App">
      <ToDo2/>
     <br />
       <h1 className="App-intro">
     In this challenge your goal is to create a to do list: 
       </h1>
       <hr />
       <ul>
         <li>
           ability to accept a task from a user
           <p>functional component</p>
         </li>
         <li>
            ability to add this to the state
         </li>
         <li>
            ability to display all of the tasks
         </li>
         <li>
            ability to evaluated if a task was completed and update the state
         </li>
       </ul>
       <hr />
     </Container>
  );
};

export default ToDo