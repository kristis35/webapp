import { useState } from 'react';
import axios from 'axios';

const useUpdate = (url, request) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = () => {
    setLoading(true);
    axios
      .put(url, request)
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

  const update = () => {
    updateData();
  };

  return { data, status, loading, error, update };
};

export default useUpdate;
