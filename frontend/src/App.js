import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";

const ThanksPage = lazy(() => import("./Views/ThanksPage/ThanksPage"));
const Calendly = lazy(() => import("./Views/Calendly/Calendly"));
const Policy = lazy(() => import("./Views/Policy/Policy"));
const EcommerceLanding = lazy(() => import("./Views/EcommerceLanding/EcommerceLanding"));
const SkincareLanding = lazy(() => import("./Views/SkincareLanding/SkincareLanding"));
const DietaryLanding = lazy(() => import("./Views/DietaryLanding/DietrayLanding"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={SkincareLanding} />
          <Route exact path="/e-commerce" component={EcommerceLanding} />
          <Route exact path="/dietary" component={DietaryLanding} />
          <Route exact path="/doctor-thanks" component={ThanksPage} />
          <Route exact path="/calendly" component={Calendly} />
          <Route exact path="/policy" component={Policy} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
