import React from 'react';
import {Container} from 'reactstrap';
import DogIndex from './DogIndex';
 
const Dogs = () => {

  return (
    <Container className="App">

      <br />
      <br />
      <DogIndex/>
      <br />
      <br />
      <h1 className="App-intro">
        For this challenge, write the logic to accomplish the following:
      </h1>
      <hr/>
      <ul>
        <li>Fetch a random image from this api: <a href="https://dog.ceo/dog-api/">here</a></li>
        <h6>check</h6>
        <li>Save this image URL to the state of the DogIndex component</li>
        <h6>check</h6>
        <li>Render the image to the screen</li>
        <h6>check</h6>
        <li>Have a button that fetches a new image</li>
        <h6>check</h6>
        <li>Make sure to include some good practice error handling</li>
        <h6>maybe?check</h6>
      </ul>
      <hr />
    </Container>
  );

}
 
export default Dogs;
