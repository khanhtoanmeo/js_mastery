import { useEffect, useState } from "react";
import useInput from "./useInput";
import { fetchAPI } from "../helpers/helper";

/**
 * useFetchApi hook for fetch data from api with url
 *
 * @param url
 * @param {*} defaultData
 * @param presentDataFunc
 * @param initLoad
 * @param method
 * @param postData
 * @returns {{handleChangeInput: handleChangeInput, data: *[], setData: (value: (((prevState: *[]) => *[]) | *[])) => void, setLoading: (value: (((prevState: boolean) => boolean) | boolean)) => void, pageInfo: {}, loading: boolean, setErrors: (value: (((prevState: *[]) => *[]) | *[])) => void, reFetch: ((function(*): Promise<*|undefined>)|*), errors: *[], fetched: boolean, total: number}}
 */
export default function useFetchApi(
 { url,
  defaultData = [],
  presentDataFunc = (val) => val,
  initLoad = true,
  method = "GET",
  postData = {}}
) {
  const [loading, setLoading] = useState(initLoad);
  const {
    input: data,
    setInput: setData,
    handleChangeInput,
  } = useInput(defaultData);
  const [total, setTotal] = useState(0);
  const [pageInfo, setPageInfo] = useState({});
  const [errors, setErrors] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [endCursor, setEndCursor] = useState(null);

  async function fetchApi() {
    setLoading(true);
    try {
      const resp =
        method === "GET"
          ? await fetchAPI(url)
          : await fetchAPI(url, { body: postData, method });
        setData(
          resp.data
        );

      if (resp.total) setTotal(resp.total);
      if (resp.pageInfo) setPageInfo(resp.pageInfo);
      if (resp.error) setErrors((prev) => [...prev, resp.error]);
      if (resp.hasOwnProperty("endCursor")) setEndCursor(resp.endCursor);
    } catch (e) {
      console.error(e);
      setErrors([...errors, e.message]);
    } finally {
      setLoading(false);
      setFetched(true);
    }
  }

  async function reFetch(reFetchUrl = url) {
    try {
      setLoading(true);
      const resp = await fetchAPI(reFetchUrl);
      setTotal(resp.total);
      if (resp.data) {
        const newData = presentDataFunc
          ? presentDataFunc(resp.data)
          : resp.data;
        setData(
          Array.isArray(newData) ? newData : { ...defaultData, ...newData }
        );
        if (resp.pageInfo) setPageInfo(resp.pageInfo);
        return newData;
      }

      setErrors([...errors, resp.errors]);
    } catch (e) {
      console.log(e);
      setErrors([...errors, e.message]);
    } finally {
      setLoading(false);
      if (!fetched) setFetched(true);
    }
  }

  useEffect(() => {
    if (initLoad && !fetched) {
      fetchApi().then(() => {});
    }
  }, []);

  const handleChangeItem = (id, key, value) => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [key]: value } : item))
    );
  };

  return {
    endCursor,
    loading,
    data,
    setData,
    pageInfo,
    reFetch,
    errors,
    setLoading,
    fetched,
    setErrors,
    handleChangeInput,
    handleChangeItem,
    total,
    setTotal,
  };
}
