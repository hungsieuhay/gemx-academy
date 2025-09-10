import type { Lesson } from "../types";
import axiosClient from "./axios-client";

const lessonApi = {
  async getLesson(slug: string): Promise<{ data: Lesson }> {
    const res = await axiosClient.get<{ data: Lesson }>(`/lesson/${slug}`);
    return res;
  },
};

export default lessonApi;
