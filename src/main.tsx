import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';
import { HeroUIProvider } from '@heroui/react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <main className="dark text-foreground bg-background">
        <App />
      </main>
    </HeroUIProvider>
  </StrictMode>,
);
