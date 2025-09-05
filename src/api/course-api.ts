import type { Course, Pagination, Response } from "../types";
import axiosClient from "./axios-client";

type CourseResponse<T> = Response<T> & Pagination;

const courseApi = {
  async getCourses(): Promise<CourseResponse<Course>> {
    const res = await axiosClient.get<CourseResponse<Course>>("/courses");
    return res;
  },
};

export default courseApi;
