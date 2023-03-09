import { useState } from 'react';
import axios from 'axios';

const useRemove = (url) => {
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

  const remove = () => {
    deleteData();
  };

  return { data, loading, error, remove };
};

export default useRemove;
