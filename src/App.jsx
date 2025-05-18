import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  // definizione variabile di stato per le attrici
  const [actresses, setActresses] = useState ([]);

  // definizione della funzione che effettua la chiamata axios
  const getActress = () => {
    axios.get('https://lanciweb.github.io/demo/api/actresses/').then((resp) =>{
      setActresses(resp.data)
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
        <div className="row mt-4">
          <div className="col-12"></div>
        </div>
        <div className="row">
          {actresses.map((actress) => {
            return(
              <>
                <div className="col-12 col-md-6 col-lg-3">
                  <div>
                    <div className="card-image">
                      <img src={actress.image} className="img-fluid" />
                    </div>
                    <div className="card-info bg-primary">
                      <h3>{actress.name}</h3>
                      <p><em> Birth year:{actress.birth_year}</em></p>
                      <br />
                      Nationality: {actress.nationality}
                      <br />
                      <p>{actress.biography}</p>
                      <p>{actress.awards}</p>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App;