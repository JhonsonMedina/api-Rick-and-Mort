import { useEffect, useState } from "react"
import Character from "./character"

function NavPage () {
  return(
    <>
    <header className="d-flex justify-content-between ">
      <p>Page</p>
    <button className="btn btn-primary btn-sm" >
      page 2
    </button>
    </header>
    
    </>

  )
}


function CharacterList(){


    const [characters,setCharacters] = useState([]);
    const[loading, setLoading] = useState(false);
    const[pago,setPago] = useState(1)

useEffect(() => {
const fetchData = async () => {
const response = await fetch(`https://rickandmortyapi.com/api/character?page=2`)
const data = await response.json()
setLoading(false)
setCharacters(data.results)
}
fetchData();
}, [])

if(loading){

  return(
    <>
    <div> Loading</div>
    </>
  )

}
    return(
      <> 
       <div className="container ">

       <NavPage />

        {loading ? (
           <h1>Loading...</h1>
        ) : (  
          <div className="row">
           {characters.map((character) =>{
             return(
          <>
         <div className="col-md-4" key={character.id} >
         <Character  character={character} />
         </div>
         </>
        )
      })}
    </div>
)}
    </div>
    </>
    )
}

export default CharacterList;