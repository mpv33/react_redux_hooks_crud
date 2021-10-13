import React,{useState} from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/contact/AddContact";
import AddTutorial from "./components/tutorial/AddTutorial";
import Home from "./components/Home";
import ContactHome from "./components/contact/ContactHome";
import TutorialHome from "./components/tutorial/TutorialHome";
import Navbar from "./components/Navbar";
import "./App.css";
import GuardeRoute from './GuardeRoute';
import UnProtected from "./UnProtected";
import AdminHome from "./components/admin/AdminHome";
import AddUser from "./components/admin/AddUser";

const App = () => {
  const [isAutheticated, setisAutheticated] = useState(false);
  
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      
      <Route exact path="/" component={() => <Home s={isAutheticated} set={setisAutheticated}/>} />
      <Route exact path="/unauth" component={() => <UnProtected />} />
      <GuardeRoute exact path="/contact"  auth={isAutheticated} component={() => <ContactHome />} />
      <GuardeRoute exact path="/tutorial"  auth={isAutheticated} component={() => <TutorialHome />} />
      <GuardeRoute exact path="/admin"  auth={isAutheticated} component={() => <AdminHome />} />
      <Route exact path="/contact/add" component={() => <AddPost />} />
      <Route exact path="/contact/edit/:id" component={() => <AddPost />} />
      <Route exact path="/tutorial/add" component={() => <AddTutorial />} />
      <Route exact path="/tutorial/edit/:id" component={() => <AddTutorial />} />
      <Route exact path="/admin/add" component={() => <AddUser />} />
      <Route exact path="/admin/edit/:id" component={() => <AddUser />} />
    </div>
  );
};
export default App;