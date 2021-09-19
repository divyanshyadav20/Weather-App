import { useState, useEffect } from "react";

const UseFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!url) return;
      setIsLoading(true);
      // clear old search
      setData([]);
      setError(null);
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // error handling for nonexistent data
          setIsLoading(false);
          if (data.cod >= 400) {
            setError("404 Not Found");
            return;
          }
          setData(data);
          //   console.log(data);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    };
    fetchData();
  }, [url]);
  return { data, error, isLoading, setUrl };
};

export default UseFetch;
