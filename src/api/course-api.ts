import type { Course, Pagination, Response } from "../types";
import axiosClient from "./axios-client";

type CourseResponse<T> = Response<T> & Pagination;

interface CourseQuery {
  category: string | null;
}

const courseApi = {
  async getCourses(params?: CourseQuery): Promise<CourseResponse<Course>> {
    const res = await axiosClient.get<CourseResponse<Course>>("/courses", {
      params,
    });
    return res;
  },
  async getCoursesDetail(slug: string): Promise<{ data: Course }> {
    const res = await axiosClient.get<{ data: Course }>(`/course/${slug}`);
    return res;
  },
};

export default courseApi;
