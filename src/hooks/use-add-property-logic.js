import { toast } from "react-toastify";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import api from "../helpers/api";

export const useAddPropertyLogic = (file) => {
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (values, helpers) => {
      try {
        helpers.setSubmitting(true);
        const images = values.images || [];
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          const { data: image } = await api.$post("/lekki/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          images.push(image);
        }

        let data;
        if (!values._id) {
          const res = await api.$post("/lekki/property", {
            ...values,
            images,
          });
          data = res.data;
          toast.success("Property created successfully.");
        } else {
          const id = values._id;
          delete values._id;
          const res = await api.$patch(`/lekki/property/${id}`, values);
          data = res.data;
          toast.success("Property updated successfully.");
        }

        navigate(`/${data._id}`);
      } catch (error) {
        if (error.errors && error.errors.length) {
          const errors = {};
          error.errors.forEach((error) => {
            const [property] = error.message.split(" ");
            errors[property] = error.message;
          });
          helpers.setErrors(errors);
          return;
        }
        toast.error(error.message);
      } finally {
        helpers.setSubmitting(false);
      }
    },
    [file, navigate]
  );

  return [handleSubmit];
};
