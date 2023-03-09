import { useState } from 'react';
import axios from 'axios';

const useUpdate = (url) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [headers, setHeaders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = (request, headers) => {
    setLoading(true);
    axios
      .put(url, request, headers)
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

  const update = (request, headers = null) => {
    updateData(request, headers);
  };

  return { data, status, headers, loading, error, update };
};

export default useUpdate;
