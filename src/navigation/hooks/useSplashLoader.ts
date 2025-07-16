import { useEffect, useState } from 'react';

export const useSplashLoader = (timeout: number = 2000) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), timeout);
    return () => clearTimeout(timer);
  }, [timeout]);

  return loading;
}; 