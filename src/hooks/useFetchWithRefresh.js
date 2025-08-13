import { useState, useCallback } from 'react';

export function useFetchWithRefresh() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = useCallback(async (url, options = {}) => {
    setLoading(true);
    setError(null);

    try {
      let response = await fetch(url, {
        ...options,
        credentials: 'include',
      });

      if (response.status === 401) {
        const refreshRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh`, {
          method: 'POST',
          credentials: 'include',
        });

        if (!refreshRes.ok) {
          throw new Error('Token refresh failed');
        }

        response = await fetch(url, {
          ...options,
          credentials: 'include',
        });
      }

      const data = await response.json();
      return data;

    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { callApi, loading, error };
}
