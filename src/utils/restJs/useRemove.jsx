import { useState } from 'react';
import axios from 'axios';

const useRemove = (url) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [headers, setHeaders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = (headers) => {
    setLoading(true);
    axios
      .delete(url, headers)
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

  const remove = (headers = null) => {
    deleteData(headers);
  };

  return { data, status, headers, loading, error, remove };
};

export default useRemove;
