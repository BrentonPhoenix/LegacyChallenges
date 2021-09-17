import React, { Component } from 'react';
 
const CatList = (props) => {

 return (
   <div id="catsMap">
     {
       props.breeds.map(cat => {
         return(
           
          <div className="catReturn">
          <h1>Breed: {cat}</h1>
          </div>
         )
       })
     }
   </div>
 )
}
 
export default CatList;

    //  {/* test this.props.cats.map() if the rest seems right but it still doesn't work. */}
    //  {/* {this.props.breeds.map(cat => {cat.breeds})} */}
    // //  <h1>{catsList}</h1>


    
  // let catsList = () =>{
  //   props.breeds.map(cat => {
  //     return(
  //       <div>
  //         {cat}
  //       </div>
  //     )
  //   } )
  // }