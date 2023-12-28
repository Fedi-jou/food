import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import SingleRecipe from "./pages/SingleRecipe"
import Error from "./pages/Default"
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import SignIn from './components/Signin';
import SignUp from './components/Signup';

function App() {


  return (
 <Router>
  <>
     <Navbar/> 
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/recipes" exact element={<Recipes />} />
        <Route path="/recipes/:id" element={<SingleRecipe />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </>
    </Router> 

  )
}

export default App
