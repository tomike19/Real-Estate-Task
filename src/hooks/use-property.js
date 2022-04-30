import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import api from "../helpers/api";

export const useProperty = (id) => {
  const [property, setProperty] = useState(null);

  const getProperty = useCallback(async () => {
    if (!id) {
      return;
    }

    try {
      const { data } = await api.$get(`/lekki/property/${id}`);

      setProperty(data);
    } catch (error) {
      toast.error(error.message);
    }
  }, [id]);

  useEffect(() => {
    getProperty();
  }, [getProperty]);

  return property;
};
