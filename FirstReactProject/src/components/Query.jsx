import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Query = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    let [info, setInfo] = useState("");
    // alert(searchParams.get("q"))

    const setQuery = () =>{
        setSearchParams({q: info});
    }

    const  QueryHandling = () =>{
        switch(searchParams.get("q")){
            case "java": {
                return (
                    <h1> This is Java </h1>
                )
            }
            case "python": {
                return (
                    <h1> This is Python </h1>
                )
            }
            default: {
                return (
                    <h1> This is not valid </h1>
                )
            }
        }
    }

  return (
    <div style={{height: "80vh"}}>
        <div >
            <input type="text" 
                value={info}
                onChange={(e)=> setInfo(e.target.value)}
            />
        <button className='btn btn-warning' onClick={setQuery}>Search</button>
        </div>
      {QueryHandling()}
    </div>
  )
}

export default Query
