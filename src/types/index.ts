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

// Course
export interface Course {
  id: string;
  name: string;
  slug: string;
  description: string;
  status: string;
  image: string;
  author: string | null;
  speakers: string[] | null;
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
