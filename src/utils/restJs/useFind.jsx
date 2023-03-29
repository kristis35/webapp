import { useState } from 'react';
import axios from 'axios';

const useFind = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = (config) => {
    setLoading(true);
    axios
      .get(url, config)
      .then((response) => {
        setResponse(response);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const find = (config = null) => {
    fetchData(config);
  };

  const clearError = () => {
    setError(null);
  };

  return { response, loading, error, find, clearError };
};

export default useFind;
