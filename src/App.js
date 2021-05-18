import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import VirtualAssistant from "./pages/VirtualAssistant/VirtualAssistant";
import VoiceSynthesizer from "./demo/VoiceSynthesizer/VoiceSynthesizer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
// import { SpeechContext } from "./hooks/SpeechContext";

function App() {
  return (
    <BrowserRouter>
      {/* <SpeechContext.Provider value={{ state, setState, isBool, etc }}> */}
      <Switch>
        <Route exact path="/">
          <VirtualAssistant />
        </Route>

        <Route exact path="/voicesynthesizer">
          <VoiceSynthesizer />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
      {/* </SpeechContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;
