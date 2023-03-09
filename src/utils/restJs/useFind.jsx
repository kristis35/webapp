import { useState } from 'react';
import axios from 'axios';

const useFind = (url) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(url)
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

  const find = () => {
    fetchData();
  };

  return { data, status, loading, error, find };
};

export default useFind;
