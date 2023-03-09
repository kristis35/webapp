import { useState } from 'react';
import axios from 'axios';

const useSave = (url) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveData = (request) => {
    setLoading(true);
    axios
      .post(url, request)
      .then((response) => {
        setData(response.data);
        setStatus({
          code: response.status,
          text: response.statusText
        });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const save = (request) => {
    saveData(request);
  };

  return { data, status, loading, error, save };
};

export default useSave;
