import axios from "axios";

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
    baseURL: "http://localhost:8888/api",
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
      baseURL: "http://localhost:8888/api",
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
