import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Top from './Pages/Home/Top/Top'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}>
            {/* <Route path="top" component={Top}></Route> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
