import './App.css';
import Login from '@/pages/Login';
import { useBoundedStore } from './features/store';

function App() {
  const path = useBoundedStore((state) => state.app.path);

  return (
    <>
      {path === 'login' ? (
        <Login />
      ) : (
        <Login />
        // <Dashboard />
      )}
    </>
  );
}

export default App;
