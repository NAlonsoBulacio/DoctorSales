import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./Views/LandingPage/LandingPage";
import ThanksPage from "./Views/ThanksPage/ThanksPage";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/doctor-thanks" component={ThanksPage} />
    </div>
  );
}

export default App;
