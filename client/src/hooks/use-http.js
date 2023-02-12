import { useState, useCallback } from 'react';


const useHttp = () => {


  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setLoading(true)
    setError(null);
    try {
      const response = await fetch(requestConfig.url);

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data.dataseries);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setLoading(false);
  }, []);

  return {   
    error,
    sendRequest,
    loading
  };
};

export default useHttp;