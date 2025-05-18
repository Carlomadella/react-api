import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  // definizione variabile di stato per le attrici
  const {actress, setActress} = useState ([]);

  // definizione della funzione che effettua la chiamata axios
  const getActress = () => {
    axios.get('https://lanciweb.github.io/demo/api/actresses/').then((resp) =>{
      console.log(resp.data)
    })
  }

  useEffect (() => getActress(), [])

  return(
    <>
      <div className="container-fluid bg-primary">
        <div className="row">
          <div className="col-12">
            <h1 className="text-white">Lista attrici</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12"></div>
        </div>
      </div>
    </>
  )
}

export default App;