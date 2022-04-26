import React, { useState, useEffect } from "react";

const useHttpGet = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState({ error: false, textError: "" });
  const [link, setLink] = useState(url);
  useEffect(() => {
    const getData = async (link) => {
      setLoading(true);
      const res = await fetch(link);
      try {
        if (res.ok) {
          const resToJson = await res.json();
          setData(resToJson);
        } else {
          setData(null);
          setErr({ error: true, status: res.status, erroText: res.statusText });
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErr({ error: true, status: "failed request", error });
      }
    };

    getData(link);
  }, [link]);
  return { data, loading, err, setLink };
};

export default useHttpGet;
