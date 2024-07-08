import axios from "axios";

const BASE_URL = "https://js-mastery-server.vercel.app/api/";

/**
 * A method to call API with given settings
 *
 * @param {string} url
 * @param {string} method
 * @param {object} data
 * @param {object} params
 * @param {object} options
 * @param clientConfig
 * @return {*}
 */
export async function api({
  url,
  data = {},
  method = "GET",
  params = {},
  options = {},
  clientConfig = {
    baseURL: BASE_URL,
    timeout: 60000,
  },
}) {
  const client = axios.create(clientConfig);
  return client
    .request({
      ...options,
      headers: {
        accept: "application/json",
        ...(options.headers || {}),
        "Accept-Control-Allow-Origin": "*",
        "Accept-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      url,
      method,
      data,
      params,
    })
    .then((res) => res.data);
}

export function getAuthenticatedFetchApi() {
  const fetchFunction = api;

  return async (
    uri,
    options = {},
    clientConfig = {
      baseURL: BASE_URL,
      timeout: 60000,
    }
  ) => {
    return fetchFunction({
      url: uri,
      data: options.body,
      method: options.method,
      clientConfig: clientConfig,
    });
  };
}

export const fetchAPI = getAuthenticatedFetchApi();
