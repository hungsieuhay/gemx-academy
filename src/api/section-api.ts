import type { Section } from "../types";
import axiosClient from "./axios-client";

const sectionApi = {
  async getSection(slug: string): Promise<{ data: Section }> {
    const res = await axiosClient.get<{ data: Section }>(`/section/${slug}`);
    return res;
  },
};

export default sectionApi;
