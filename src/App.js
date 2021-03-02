import './App.css';
import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/header' component={Header}/>
          <Route path='/' component={Main}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
