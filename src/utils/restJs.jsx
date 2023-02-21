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

export { find, save, update, remove };
