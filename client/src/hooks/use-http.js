import { useState, useCallback } from 'react';


const useHttp = () => {


  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData1, applyData2) => {

 
    setLoading(true)
    setError(null);

      const twoFetchResults = await Promise.all([ 
        
        fetch(requestConfig.url1),
        fetch(requestConfig.url2)
      ]).then(results => Promise.all(results.map(r => r.json())) )
      .then(results => {
        
        applyData1(results[0].dataseries)
        applyData2(results[1].dataseries)
      }
        ).catch( err => setError(err))      

 
   

    setLoading(false);
  }, []);

  return {   
    error,
    sendRequest,
    loading
  };
};

export default useHttp;