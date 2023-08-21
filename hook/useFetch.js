import { useState, useEffect } from "react";

import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": "0af248d31fmsh279c55e216b7b19p164735jsnc9709636a513",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
        console.log(response?.data);
      setData(response?.data?.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      //   alert("Something went wrong!");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, reFetch };
};

export default useFetch;
