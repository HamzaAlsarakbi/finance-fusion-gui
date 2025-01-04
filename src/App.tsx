import './App.css';
import Login from '@/pages/Login';
import { useBoundedStore } from './features/store';
import Dashboard from './pages/Dashboard';
import './App.css';
import Splash from './pages/splash/Splash';

function App() {
  const path = useBoundedStore((state) => state.app.path);

  return (
    <div className="app bg-zinc-950">
      {path === 'login' ? (
        <Login />
      ) : path === 'dashboard' ? (
        <Dashboard />
      ) : path === 'splash' ? (
        // TODO: Add a splash screen
        <Splash />
      ) : (
        // TODO: Add a 404 page
        <div>404</div>
      )}
    </div>
  );
}

export default App;
