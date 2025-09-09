/* eslint-disable @typescript-eslint/no-explicit-any */

// Respose data
export interface Pagination {
  meta: {
    current_page: number;
    per_page: number;
    total: number;
  };
}

export interface Response<T> {
  data: T[];
}

// Question
export interface Question {
  id: number;
  question: string;
  A: string;
  B: string;
  C: string;
  D: string;
  answers: "A" | "B" | "C" | "D";
  lesson_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}

// Lesson
export interface LessonDetails {
  id: string;
  name: string;
  description: string;
  excerpt: string;
  slug: string;
  link: string;
  views: number;
  status: string | null;
  created_at: string;
  updated_at: string;
  image: string;
  author: string | null;
  is_completed: 1 | 0;
  course_slug: string;
  section_slug: string;
  questions: Question[];
}

// Category
export interface Category {
  id: number;
  name: string;
  slug: string;
}

// Section
export interface Section {
  id: number;
  title: string;
  slug: string;
  course_id: number;
  created_at: string;
  updated_at: string;
  lessons: LessonDetails[];
}

// Comments
export interface Comment {
  id: number;
  content: string;
  user_id: number;
  course_id: number;
  created_at: string;
  updated_at: string;
  username: string | null;
  replies: Comment[];
}

// Course
export interface Course {
  id: string;
  name: string;
  slug: string;
  description: string;
  status: string;
  image: string;
  author: string;
  fee: number;
  category_id: number;
  speakers: string[] | null;
  thumbnail: string;
  sections: Section[];
  comments: Comment[];

  created_at: string;
  updated_at: string;
}

// Research article
export type Research = {
  id: string;
  img_path: string;
  title: string;
  created_at: string;
  content_short: string;
  like_count: string;
  review_count: string;
  is_fee: boolean;
  slug: string;
  language: string;
  posted_time: string;
  views: number;
  user: {
    id: string;
    image_path: string;
    name: string;
    address: string;
    is_verify: boolean;
    is_builder: boolean;
  };
  research_coin: any[];
  research_category: any[];
  research_chain: any[];
  research_topic: {
    research_id: string;
    topic_id: string;
    topic: {
      id: string;
      name: string;
      created_at: string;
      updated_at: string;
      type: string;
      tag_type: string | null;
      slug: string;
      img_path: string | null;
      is_hot: boolean | null;
      cmc_id: string | null;
      position: number;
      sidebar_for: string;
    };
  }[];
};

// Context
export interface CourseContextType {
  course?: Course;
}
