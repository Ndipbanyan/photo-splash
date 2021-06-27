import { useState, useEffect } from "react";
import { createApi } from "unsplash-js";
import dotenv from 'dotenv'
import "./App.css";
dotenv.config()

const unsplash = createApi({
  accessKey: "ADtOVLoeo-3XWE2FbC8sa0KltCWZh4adlb4X9sACIDA",
});


const formSubmit=(e)=>{
  e.preventDefault()
}

function App() {
  const [result, setResult] = useState([])

  useEffect(() => {
    unsplash.search.getPhotos({ query: "africans", perPage: 20, })
      .then(result => {
        setResult(result.response.results)
        console.log(result);
      }
      )
  }, [])



  return (
    <div className="App">
      <form onSubmit={formSubmit} >
        <div className="search-area">
          <div className="search-container">
            <span className="fa fa-search" aria-hidden="true"></span>
            <input
              type="text"
              className="search"
              data-testid="search"
              placeholder="Search for photo"
            />
          </div>
        </div>
      </form>
      <div className="card-list">
        {
          result.map(item =>
          {
            return (
              <div className="card" key={item.id}>
                <img className="card-image"src={item.urls.regular} alt={item.alt_description}/>
              </div>
            )
            })
        }
      </div>
    </div>
  );
}

export default App;
