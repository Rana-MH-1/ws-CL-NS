import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBarr from './Components/NavBarr';
import AddUsers from './Pages/AddUser';
import UserLists from './Pages/UserLists';


function App() {
  return (
    <Router>
      <NavBarr/>
      <Routes>
        <Route path='/add' element={<AddUsers/>} />
        <Route path='/users' element={<UserLists/>} />
      </Routes>
    </Router>
      
  );
}

export default App;
