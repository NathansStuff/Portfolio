import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './navigation/homepage.component'
import AboutPage from './navigation/about.component'
import ProjectsPage from './navigation/projects.component'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about/21' component={AboutPage} />
        <Route exact path='/projects' component={ProjectsPage} />
        <Route exact path='/about' component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
