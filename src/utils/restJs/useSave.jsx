import { useState } from 'react';
import axios from 'axios';

const useSave = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveData = (request, config) => {
    setLoading(true);
    axios
      .post(url, request, config)
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

  const save = (request, config = null) => {
    saveData(request, config);
  };

  const clearError = () => {
    setError(null);
  };

  return { response, loading, error, save, clearError };
};

export default useSave;
