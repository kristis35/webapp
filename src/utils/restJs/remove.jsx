import { useEffect, useState } from 'react';
import axios from 'axios';

const remove = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = () => {
    setLoading(true);
    axios
      .delete(url)
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
    deleteData();
  };

  useEffect(() => {
    deleteData();
  }, [url]);

  return { data, loading, error, retryCall };
};

export default remove;
