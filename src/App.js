import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import AboutPage from './pages/about/about.component'
import ProjectsPage from './pages/projects/projects.component'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/projects' component={ProjectsPage} />
      </Switch>
    </div>
  );
}

export default App;
