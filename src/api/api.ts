import axios, { type AxiosRequestConfig, type AxiosError } from 'axios';
import { toast } from 'react-toastify';

interface DefaultRequestProps {
  url: string;
  params?: AxiosRequestConfig['params'];
  allowErrorHandling?: boolean;
}

interface RequestPropsWithData extends DefaultRequestProps {
  data: AxiosRequestConfig['data'];
}

const getRequestUrl = (path: string) => `${process.env.REACT_APP_API_BASE_URL}${path}`;

const getRequestConfig = (params?: AxiosRequestConfig['params']): AxiosRequestConfig => {
  const hasTimeoutInParams = !!params && !!params?.timeout;

  return {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: hasTimeoutInParams && params.timeout,
    params,
  };
};

const getErrorMessage = (error: AxiosError, url: string) => {
  const errorRequest = url.toUpperCase();

  const errorCode = String(error.request.status) ?? '';
  const errorMessage = error.message ?? '';

  const errorCodeTemplate = errorCode ? `: ${errorCode}` : '';
  const errorMessageTemplate = errorMessage ? ` : ${errorMessage}` : '';

  return `[${errorRequest} ${errorCodeTemplate}]${errorMessageTemplate}`;
};

const errorHandler = (error: AxiosError, url: string) => {
  toast.error(getErrorMessage(error, url));
  if (process.env.NODE_ENV === 'development') {
    console.error(error);
  }
};

const get = async <Response>({
  url,
  params,
  allowErrorHandling = false,
}: DefaultRequestProps): Promise<Response> => {
  const requestConfig = getRequestConfig(params);
  const response = await axios.get(getRequestUrl(url), requestConfig).catch(async (error) => {
    if (allowErrorHandling) {
      errorHandler(error, url);
    }

    return Promise.reject(error);
  });

  return response.data;
};

const post = async <Response>({
  url,
  data,
  params,
  allowErrorHandling = false,
}: RequestPropsWithData): Promise<Response> => {
  const requestConfig = getRequestConfig(params);
  const response = await axios
    .post(getRequestUrl(url), data, requestConfig)
    .catch(async (error) => {
      if (allowErrorHandling) {
        errorHandler(error, url);
      }

      return Promise.reject(error);
    });

  return response.data;
};

const remove = async <Response = void>({
  url,
  params,
  allowErrorHandling = false,
}: DefaultRequestProps): Promise<Response> => {
  const requestConfig = getRequestConfig(params);
  const response = await axios.delete(getRequestUrl(url), requestConfig).catch(async (error) => {
    if (allowErrorHandling) {
      errorHandler(error, url);
    }

    return Promise.reject(error);
  });

  return response.data;
};

const put = async <Response>({
  url,
  data,
  params,
  allowErrorHandling = false,
}: RequestPropsWithData): Promise<Response> => {
  const requestConfig = getRequestConfig(params);
  const response = await axios.put(getRequestUrl(url), data, requestConfig).catch(async (error) => {
    if (allowErrorHandling) {
      errorHandler(error, url);
    }

    return Promise.reject(error);
  });

  return response.data;
};

export const api = { get, post, put, remove };
