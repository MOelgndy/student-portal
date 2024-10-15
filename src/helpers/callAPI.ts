import { RequestInit } from 'node-fetch';

import { toCamelCase, toSnakeCase } from '../adapters/middleware';
import { MethodTypes } from '../types/RestApis';

import { isEmpty } from './utils';

//const API_URL = process.env.NEXT_PUBLIC_API_URL;
// TODO: Remove when handled correctly in CRM repo
const API_URL = 'https://testing.ticlick-crm.com/api/v1/';

type Params = {
  url: string;
  method: MethodTypes;
  options?: RequestInit;
  token: string | undefined;
  body?: Record<string, unknown>;
};

const modifyBody = (body: Record<string, unknown>) => {
  return JSON.stringify(toSnakeCase(body));
};

const modifyResponse = (response: Record<string, unknown>) => {
  return toCamelCase(response);
};

export const callAPI = async ({
  url,
  body,
  options,
  token = '',
  method = MethodTypes.GET,
}: Params) => {
  try {
    if (isEmpty(url)) throw new Error('URL is required');

    const headers = {
      Accept: 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(method !== MethodTypes.GET && { 'Content-Type': 'application/json' }),
    };

    const payload = {
      method,
      options,
      headers,
      ...(method !== MethodTypes.GET && body && { body: modifyBody(body) }),
    };

    const res = await fetch(`${API_URL}${url}`, payload);
    if (!res.ok) throw new Error(`Error: ${res.statusText}`);

    const jsonResponse = await res.json();
    const response = modifyResponse(jsonResponse);
    const { totalRows, pagesCount, startPage, stopPage, errorCode } =
      response || {};

    return {
      success: true,
      results: response,
      totalRows,
      pagesCount,
      startPage,
      stopPage,
      errorCode,
      errorMsg: response?.errorData?.errors || null,
    };
  } catch (err) {
    console.error(err);
    let message = 'An unknown error occurred';
    if (err instanceof Error) message = err.message;
    //TODO: use toaster later

    return {
      success: false,
      errorMsg: message,
    };
  }
};
