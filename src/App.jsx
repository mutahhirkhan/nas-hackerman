import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
