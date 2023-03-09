import { useState } from 'react';
import axios from 'axios';

const useFind = (url) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [headers, setHeaders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = (config) => {
    setLoading(true);
    axios
      .get(url, config)
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

  const find = (config = null) => {
    fetchData(config);
  };

  return { data, status, headers, loading, error, find };
};

export default useFind;
