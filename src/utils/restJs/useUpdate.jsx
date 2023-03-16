import { useState } from 'react';
import axios from 'axios';

const useUpdate = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = (request, config) => {
    setLoading(true);
    axios
      .put(url, request, config)
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

  const update = (request, config = null) => {
    updateData(request, config);
  };

  return { response, loading, error, update };
};

export default useUpdate;
