
import "./App.css";
import About from "./components/About";
import { BrowserRouter as Routes, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import { useState } from "react";
import Indexx from "./components/Indexx";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 2000);
}

  return (
    <> 
    <NoteState>
      <Routes>
        <Navbar />
        <Alert alert={alert}/>
        <div className="containerr">
        <Switch>
          <Route exact path="/">
            <Indexx showAlert={showAlert}/>
          </Route>
          <Route exact path="/login">
            <Login showAlert={showAlert}/>
          </Route>
          <Route exact path="/get start">
            <Login showAlert={showAlert}/>
          </Route>
          <Route exact path="/signup">
            <Signup showAlert={showAlert}/>
          </Route>
          <Route exact path="/home">
            <Home showAlert={showAlert}/>
          </Route>
        </Switch>
        </div>
        <About />
      </Routes>
      </NoteState>
    </>
  );
}

export default App;
