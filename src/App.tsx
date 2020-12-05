import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Topbar from './components/topbar';
import Home from './screens/home';
import { colors } from './components/colors';
import Details from './screens/details';


function App() {

  const [ currentMode, setCurrentMode ] = useState("light")

  useEffect(() => {
    let mode = localStorage.getItem('@mode')
    if (!mode) return;

    setCurrentMode(mode)
  },[])

  // set mode
  function setMode() {
    let editMode
    if (currentMode === "light") {
      editMode = "dark"
    }else{
      editMode = "light"
    }

    // set in localstorage
    localStorage.setItem('@mode', editMode)
    setCurrentMode(editMode)
  }

  return (
    <Router>
      <div id="all-container" style={{
        backgroundColor: currentMode === "light" ? colors.light_mode_background : colors.dark_mode_background
      }}>
      <Topbar setMode={setMode} mode={currentMode} />
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Home mode={currentMode} />}
          mode={currentMode}
        />
        <Route
          path="/:name"
          render={() => <Details mode={currentMode} />}
          mode={currentMode}
        />
      </Switch>
      
      </div>
    </Router>
  );
}

export default App;
