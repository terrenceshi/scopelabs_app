import {
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <h2>Accounts</h2>

      <ul>
        <li>
          <Link to="/netflix">Netflix</Link>
        </li>
        <li>
          <Link to="/zillow-group">Zillow Group</Link>
        </li>
        <li>
          <Link to="/yahoo">Yahoo</Link>
        </li>
        <li>
          <Link to="/modus-create">Modus Create</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<div>sup nigga</div>} />
        <Route path="/:id" element={<div>sup nigga</div>} />
      </Routes>
    </div>
  );
}

export default App;
