type Fact = {
  _id: string;
  text: string;
  user: string;
};

type Post = {
  id: string;
  title: string;
  body: string;
  userId: string;
  createdOn: number;
  updatedOn: number;
  image: null;
  images: null;
  tags: null;
  total: number;
};

type SonicResponse<T = any> = {
  data: T;
  source: "d1" | "cache" | "kv";
  total: number;
  executionTime: number;
};
