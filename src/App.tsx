import React,{useState} from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact";
import Home from "./components/Home";
import ContactHome from "./components/ContactHome";
import Navbar from "./components/Navbar";
import "./App.css";
import GuardeRoute from './GuardeRoute';
import UnProtected from "./UnProtected";

const App = () => {
  const [isAutheticated, setisAutheticated] = useState(false);
  
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      
      <Route exact path="/" component={() => <Home s={isAutheticated} set={setisAutheticated}/>} />
      <Route exact path="/unauth" component={() => <UnProtected />} />
      <GuardeRoute exact path="/contact"  auth={isAutheticated} component={() => <ContactHome />} />
      <Route exact path="/contact/add" component={() => <AddPost />} />
      <Route exact path="/contact/edit/:id" component={() => <AddPost />} />
    </div>
  );
};
export default App;