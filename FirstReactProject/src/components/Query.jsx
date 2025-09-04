import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Query = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    // alert(searchParams.get("q"))

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
      {QueryHandling()}
    </div>
  )
}

export default Query
