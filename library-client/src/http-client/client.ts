import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_LOCAL_API_URL
  : process.env.REACT_APP_API_URL

export const queryClient = new QueryClient();

export const httpClient = axios.create({
  baseURL: BASE_URL
});