
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div className="search-area">
          <div className="search-container">
            <span class="fa fa-search" aria-hidden="true"></span>
            <input type="text" className="search" data-testid="search" placeholder="Search for photo"/>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
