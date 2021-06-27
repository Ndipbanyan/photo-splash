import { useState } from "react";
import { createApi } from "unsplash-js";
import dotenv from 'dotenv'
import "./App.css";
dotenv.config()

const unsplash = createApi({ accessKey: process.env.ACCESS_KEY })

const formSubmit=(e)=>{
  e.preventDefault()
}
function App() {
  return (
    <div className="App">
      <form onSubmit={formSubmit} >
        <div className="search-area">
          <div className="search-container">
            <span class="fa fa-search" aria-hidden="true"></span>
            <input
              type="text"
              className="search"
              data-testid="search"
              placeholder="Search for photo"
            />
          </div>
        </div>
      </form>
      <div className="result"></div>
    </div>
  );
}

export default App;
