import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import api from "../helpers/api";

export const useProperties = (params) => {
  const [properties, setProperties] = useState([]);

  const getProperties = useCallback(async () => {
    try {
      const { data } = await api.$get("/lekki/property", { params });

      setProperties(data);
    } catch (error) {
      toast.error(error.message);
    }
  }, [params]);

  useEffect(() => {
    getProperties();
  }, [getProperties]);

  return properties;
};
