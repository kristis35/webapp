import { useEffect, useState } from 'react';
import axios from 'axios';

const save = (url, request) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveData = () => {
    setLoading(true);
    axios
      .post(url, request)
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
    saveData();
  };

  useEffect(() => {
    saveData();
  }, [url]);

  return { data, loading, error, retryCall };
};

export default save;
