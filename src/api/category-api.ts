import type { Category } from "../types";
import axiosClient from "./axios-client";

const categoryApi = {
  async getCategories(): Promise<Array<Category>> {
    const res = await axiosClient.get<Array<Category>>("/categories");
    return res;
  },
};

export default categoryApi;
