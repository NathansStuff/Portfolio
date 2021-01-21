import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import About from './pages/about/about.component'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
