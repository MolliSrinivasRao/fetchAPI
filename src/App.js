import './App.css';
import { useState } from 'react';
function App() {
  const [search, setSearch] = useState('');
  
  const submitHandler = e => {
    e.preventDefault();
    console.log(search);
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=${search}`)
      .then((request) => request.json())
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <div>
      <div className="App">
        <h4>Meal Finder</h4>
        <form onSubmit={submitHandler} >
          <div>
            <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
            <input type='submit' value="search" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;