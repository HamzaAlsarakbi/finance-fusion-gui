import './App.css'
import { selectPath } from '@/features/app/appSelectors'
import { useRootSelector } from '@/hooks/useTypesSelector';
import Login from '@/pages/Login';

function App() {
  const path = useRootSelector(selectPath);

  return (
    <>
      {path === 'login' ? (
        <Login />
      ) : (
        <Login />
        // <Dashboard />
      )}
    </>
  )
}

export default App
