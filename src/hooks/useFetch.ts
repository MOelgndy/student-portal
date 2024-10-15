import { RequestInit } from 'node-fetch';
import { useEffect, useState } from 'react';

import { getAccessToken } from '../helpers/authHelpers';
import { callAPI } from '../helpers/callAPI';
import { isEmpty } from '../helpers/utils';
import { MethodTypes } from '../types/RestApis';

type FetchProps<T> = {
  url: string;
  options?: RequestInit;
  dependencies?: unknown[];
  onSuccess?: (_data: T) => void;
  onFailure?: (_error: unknown) => void;
};

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

export function useFetch<T>(props: FetchProps<T>): FetchState<T> {
  const { url, options, onSuccess, onFailure, dependencies = [] } = props;

  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
    isLoading: false,
  });

  useEffect(() => {
    if (isEmpty(url)) throw new Error('URL is required');

    const fetchData = async () => {
      setState({
        data: null,
        error: null,
        isLoading: true,
      });

      try {
        const response = await callAPI({
          url,
          options,
          method: MethodTypes.GET,
          token: getAccessToken() || process.env.NEXT_PUBLIC_TOKEN,
        });

        if (!response.success) throw new Error(response.errorMsg);

        const data: T = response.results;
        setState({ data, isLoading: false, error: null });
        onSuccess?.(data);
      } catch (err) {
        let message = 'Sorry failed to fetch items, ';
        if (err instanceof Error) message += err.message;
        else message += 'an unknown error occurred';

        console.error(message);

        setState({ data: null, isLoading: false, error: message });
        onFailure?.(err as Error);
      }
    };

    fetchData();
  }, [url, onFailure, onSuccess, options, ...dependencies]);

  return state;
}
