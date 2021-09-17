import React ,{useState, useEffect} from "react";

const ToDo2 = () => {
 const [list, setList] = useState([])
 const [item, setItem] = useState('')

    return(
        <div>
            <label htmlFor="toDo">To Do:</label>
            <input onChange={e => setItem(e.target.value)} value={item} type="text"/>
            <button onClick={e=>{
                setList(list =>[ ...list,item])
                setItem("")
            }}>Add</button>
            <br/>
            {
                list.map((current, index)=> {
                    
                    return(
                        <div id={index}>
                    <p >To Do: {current} </p>
                    <button onClick={ e => document.getElementById(index).remove()}>Complete</button>
                    </div>
                    )
                })   
            }
        </div>
    )
}


export default ToDo2