import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { msalInstance } from '../index';
import { scopes } from "../auth/auth.config";

const BASE_URL = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_API_URL_LOCAL
  : process.env.REACT_APP_API_URL

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true,
      refetchOnMount: true,
    },
  },
});

export const httpClient = axios.create({
  baseURL: BASE_URL
});

async function getToken(): Promise<string> {
  const currentAccount = msalInstance.getActiveAccount();
  const accessTokenRequest = {
    scopes,
    account: currentAccount || undefined,
  };

  const accessTokenResponse = await msalInstance.acquireTokenSilent(accessTokenRequest);

  return `Bearer ${accessTokenResponse.accessToken}`;
}

httpClient.interceptors.request.use(async (config) => {
  if (config!.url!.indexOf("/api") !== 0) {
    const bearer = await getToken();
    config.headers.Authorization = bearer;
  }

  return config;
});