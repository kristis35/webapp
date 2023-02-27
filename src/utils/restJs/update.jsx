import { useEffect, useState } from 'react';
import axios from 'axios';

const update = (url, request) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = () => {
    setLoading(true);
    axios
      .put(url, request)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const retryCall = () => {
    updateData();
  };

  useEffect(() => {
    updateData();
  }, [url]);

  return { data, loading, error, retryCall };
};

export default update;
