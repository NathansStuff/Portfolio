import './App.css';
import AvatarComponent from './components/avatar-component/avatar-component.component';
import AboutPage from './pages/about/about.component'

function App() {
  return (
    <div className='avatar-info-wrapper'>
      <AvatarComponent />
      <AboutPage />
    </div>
  );
}

export default App;
