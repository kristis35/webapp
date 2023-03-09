import { useState } from 'react';
import axios from 'axios';

const useUpdate = (url) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [headers, setHeaders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = (request, config) => {
    setLoading(true);
    axios
      .put(url, request, config)
      .then((response) => {
        setData(response.data);
        setStatus({
          code: response.status,
          text: response.statusText
        });
        setHeaders(response.headers);
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

  return { data, status, headers, loading, error, update };
};

export default useUpdate;
