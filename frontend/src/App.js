import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "./Views/LandingPage/LandingPage";
import ThanksPage from "./Views/ThanksPage/ThanksPage";
import Calendly from "./Views/Calendly/Calendly";
import Policy from "./Views/Policy/Policy";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/doctor-thanks" component={ThanksPage} />
      <Route exact path="/calendly" component={Calendly} />
      <Route exact path="/policy" component={Policy} />
    </div>
  );
}

export default App;
