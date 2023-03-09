import { useState } from 'react';
import axios from 'axios';

const useSave = (url) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [headers, setHeaders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveData = (request, headers) => {
    setLoading(true);
    axios
      .post(url, request, headers)
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

  const save = (request, headers = null) => {
    saveData(request, headers);
  };

  return { data, status, headers, loading, error, save };
};

export default useSave;
