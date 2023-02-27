import { useEffect, useState } from 'react';
import axios from 'axios';

const find = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(url)
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
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, retryCall };
};

export default find;
