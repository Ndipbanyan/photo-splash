import { useState, useEffect } from "react";
import { createApi } from "unsplash-js";
import dotenv from 'dotenv'
import "./App.css";
dotenv.config()

const unsplash = createApi({
  accessKey: process.env.REACT_APP_ACCESS_KEY,
});




function App() {
  const formSubmit = (e) => {
    e.preventDefault();
    fetchApi()
  };
  const onChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }
 
  const [result, setResult] = useState([])
  const[query,setQuery] = useState("africans")

  const fetchApi = ()=>unsplash.search
    .getPhotos({ query: query, perPage: 20 })
    .then((result) => {
      setResult(result.response.results);
      console.log(result);
    });
  
  useEffect(() => {
    fetchApi()
  }, [])



  return (
    <div className="App">
      <form onSubmit={formSubmit} >
        <div className="search-area">
          <div className="search-container">
            <span className="fa fa-search" aria-hidden="true"></span>
            <input
              type="text"
              className="search-input"
              data-testid="search"
              placeholder="Search for photo"
              value={query}
              onChange={onChange}
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
                <img
                  className="card-image"
                  src={item.urls.regular}
                  alt={item.alt_description}
                />
                <div className="overlay"></div>
                <div className="author">
        
                  <img className="author-image" src={item.user.profile_image.small}/>
                  <a className="author-profile" href={item.user.links.html}> {item.user.first_name}</a>
                </div>
              </div>
            );
            })
        }
      </div>
    </div>
  );
}

export default App;
