import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat.js';
import {
	BrowserRouter as Router,
	Redirect,
	Link,
	Route,
	Routes,
} from "react-router-dom";


function App() {
  return (
  <Router>
    <Routes>
      <Route  path='/chat' element={<Chat />}>
          </Route>
    </Routes>
  </Router>
  );
}

export default App;
