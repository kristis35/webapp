import { useState } from 'react';
import axios from 'axios';

const useRemove = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = (config) => {
    setLoading(true);
    axios
      .delete(url, config)
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

  const remove = (config = null) => {
    deleteData(config);
  };

  const clearError = () => {
    setError(null);
  };

  return { response, loading, error, remove, clearError };
};

export default useRemove;
