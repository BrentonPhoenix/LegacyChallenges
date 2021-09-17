import React, {useState, useEffect} from "react";

const DogIndex = () => {
    const [dog, setDog] = useState('')
    function fetchDog(){
        const dogAPI = 'https://dog.ceo/api/breeds/image/random'
        fetch(dogAPI)
        .then(res => res.json())
        .then(json => setDog(json.message))
    }

    useEffect(()=>{
        fetchDog()
    },[])

    return(
        <div id='dogDIV'>
        <button onClick={fetchDog}>New Dog!</button>
        <br/>
        <br/>
        <br/>
        <img src={dog} alt="random dog"/>
        <br/>
        <br/>
        <br/>
        </div>
    )
}

export default DogIndex