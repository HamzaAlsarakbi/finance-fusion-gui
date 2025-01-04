import { useEffect, useState } from 'react';

import './Splash.css';
import { useBoundedStore } from '@/features/store';
import { useInterval } from '@/utils/useInterval';
import { Spinner } from '@nextui-org/react';
import { SPLASH_HINTS } from '@/constants/splash';
import { SECONDS_TO_MS } from '@/constants/time';
import { AxiosError, HttpStatusCode } from 'axios';
import { PLANS_API } from '@/features/plans/plansApi';

const Splash = () => {
  const { setPath } = useBoundedStore((state) => state.app);
  const [hint, setHint] = useState('');

  useInterval(async () => {
    try {
      await PLANS_API.getPlans();
      setPath('dashboard');
    } catch (error) {
      const e = error as AxiosError;
      if (e.status === HttpStatusCode.Unauthorized) {
        setPath('login');
      } else {
        console.error(e);
      }
    }
  }, 3 * SECONDS_TO_MS);

  useInterval(() => {
    // pick random number
    const randomIndex = Math.floor(Math.random() * SPLASH_HINTS.length);
    setHint(SPLASH_HINTS[randomIndex]);
  }, 5 * SECONDS_TO_MS);

  useEffect(() => {
    document.title = 'Finance Fusion';
  }, []);

  return (
    <div className="page splash-screen flex flex-col justify-center">
      <div className="box px-4 py-4 flex flex-col gap-6 rounded-medium">
        <h1 className="title fancy-text shadow-md mb-4">Finance Fusion</h1>
        <div className="flex flex-col gap-1">
          <Spinner size="lg" />
          <p className="text-neutral-400">{hint}</p>
        </div>
      </div>
    </div>
  );
};

export default Splash;
