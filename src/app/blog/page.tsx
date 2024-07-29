import Link from "next/link";
import { drizzle } from "drizzle-orm/d1";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { table as postsTable } from "@/server/posts";
import { count } from "drizzle-orm";
import { type InferSelectModel } from "drizzle-orm";

// FIXME: Set this to 10 after pagination testing
const PAGE_SIZE = 3;

type Post = InferSelectModel<typeof postsTable>;

const getLocalPosts = async ({ currentPage }: { currentPage: number }): Promise<Array<Post & { total: number }>> => {
  const context = getRequestContext();
  const db = drizzle(context.env.D1DATA);

  const [total] = await db.select({ count: count() }).from(postsTable);

  const results = await db
    .select()
    .from(postsTable)
    .orderBy(postsTable.createdOn)
    .limit(PAGE_SIZE)
    .offset(PAGE_SIZE * (currentPage - 1));

  return results.map((result) => ({ ...result, total: total.count }));
};

const getPosts = async (): Promise<Array<Post>> => {
  const startTime = Date.now();
  const postRequest = await fetch("https://api.tombaker.me/v1/posts");
  if (!postRequest.ok) return [];

  const { data: posts, executionTime, source }: SonicResponse<Array<Post>> = await postRequest.json();

  const endTime = Date.now();
  posts[0].title +=
    " (fetched from SonicJS in " + (endTime - startTime) + `ms via ${source}, execution time: ${executionTime}ms)`;
  return posts;
};

const Page = async ({ searchParams }: { searchParams?: { page?: string } }) => {
  // const posts = await getPosts();
  // console.log("Posts: ", posts);

  const currentPage = Number(searchParams?.page) || 1;
  console.log(searchParams, currentPage);

  const localPosts = await getLocalPosts({ currentPage });

  const total = localPosts[0]?.total || 0;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <div>
      <h1 className="mb-4 border-b border-gray-100 dark:border-gray-600 pb-6">Tom&apos;s Blog</h1>
      {/* {posts.map((post: Post) => (
        <div key={post.id} className="mt-6">
          <Link href={`/blog/${post.id}`}>
            <h2 className="text-xl font-bold">{post.title}</h2>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      ))} */}
      {localPosts.map((post: Post) => (
        <div key={post.id} className="mt-6">
          <Link href={`/blog/${post.id}`}>
            <h2 className="text-xl font-bold">{post.title}</h2>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: post.body ?? <div /> }} />
        </div>
      ))}
      <div className="mt-6">
        {currentPage > 1 && <Link href={`/blog?page=${currentPage - 1}`}>Previous</Link>}
        {currentPage > 1 && currentPage < totalPages && " | "}
        {currentPage < totalPages && <Link href={`/blog?page=${currentPage + 1}`}>Next</Link>}
      </div>
    </div>
  );
};

export default Page;
export const runtime = "edge";
