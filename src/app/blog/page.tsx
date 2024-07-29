import Link from "next/link";
import { drizzle } from "drizzle-orm/d1";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { table as postsTable } from "@/server/posts";

const getLocalPosts = async (): Promise<Array<any>> => {
  const startTime = Date.now();
  const context = getRequestContext();
  const db = drizzle(context.env.D1DATA);

  const results = await db.select().from(postsTable).all();

  const endTime = Date.now();
  results[0].title += " (fetched from D1 in " + (endTime - startTime) + "ms)";
  return results;
};

const getPosts = async (): Promise<Array<Post>> => {
  const startTime = Date.now();
  const postRequest = await fetch("https://api.tombaker.me/v1/posts");
  if (!postRequest.ok) return [];

  const { data: posts, executionTime, source }: SonicResponse<Array<Post>> = await postRequest.json();

  const endTime = Date.now();
  posts[0].title +=
    " (fetched from SonicJS in " + (endTime - startTime) + `ms via ${source}, execution time: {${executionTime}}ms)`;
  return posts;
};

const Page = async () => {
  // TODO: Implement pagination logic and fetch blog posts
  const posts = await getPosts();
  console.log("Posts: ", posts);

  const localPosts = await getLocalPosts();

  console.log("Local posts: ", localPosts);

  return (
    <div>
      <h1 className="mb-4 border-b border-gray-100 dark:border-gray-600 pb-6">
        Tom&apos;s Blog (eventually, but just cat facts for now!)
      </h1>
      {posts.map((post: Post) => (
        <div key={post.id} className="mt-6">
          <Link href={`/blog/${post.id}`}>
            <h2 className="text-xl font-bold">{post.title}</h2>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      ))}
      {localPosts.map((post: Post) => (
        <div key={post.id} className="mt-6">
          <Link href={`/blog/${post.id}`}>
            <h2 className="text-xl font-bold">{post.title}</h2>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      ))}
    </div>
  );
};

export default Page;
export const runtime = "edge";
