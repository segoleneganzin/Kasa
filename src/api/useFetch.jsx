import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      try {
        // use sessioStorage to avoid querying the database each time.
        // This is possible here because the content is not "live".
        if (window.sessionStorage.getItem(url) === null) {
          // console.log('uncached datas');
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
          sessionStorage.setItem(url, JSON.stringify(data));
        } else {
          // console.log('cached datas');
          setData(JSON.parse(window.sessionStorage.getItem(url)));
        }
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, data, error };
}
