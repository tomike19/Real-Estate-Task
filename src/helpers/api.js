import axios from "axios";
import config from "./config";

const api = {
  $axios: axios.create({
    baseURL: config.apiUrl,
  }),

  getError(error) {
    if (error.isAxiosError) {
      const message = error.response?.data?.error?.message || error.message;
      const errors = error.response?.data?.error?.errors || [];
      const httpError = new Error(message);
      httpError.status = error.response?.status || 0;
      httpError.errors = errors;

      return httpError;
    }

    return error;
  },

  async $get(url, config) {
    try {
      const { data } = await this.$axios.get(url, config);

      return data;
    } catch (error) {
      throw this.getError(error);
    }
  },

  async $post(url, body, config) {
    try {
      const { data } = await this.$axios.post(url, body, config);

      return data;
    } catch (error) {
      throw this.getError(error);
    }
  },

  async $patch(url, body, config) {
    try {
      const { data } = await this.$axios.patch(url, body, config);

      return data;
    } catch (error) {
      throw this.getError(error);
    }
  },
};

export default api;
