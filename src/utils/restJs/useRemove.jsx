import { useState } from 'react';
import axios from 'axios';

const useRemove = (url) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = () => {
    setLoading(true);
    axios
      .delete(url)
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

  const remove = () => {
    deleteData();
  };

  return { data, status, loading, error, remove };
};

export default useRemove;
