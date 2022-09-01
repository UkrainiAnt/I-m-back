import { useState, useEffect } from 'react';

const useDebounce = (val: any, delay: number = 300) => {
  const [debounced, setDebounced] = useState(val);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(val), delay);

    return () => clearTimeout(handler);
  }, [val, delay]);

  return debounced;
};

export default useDebounce;
