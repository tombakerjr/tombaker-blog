import Link from "next/link";
import { drizzle } from "drizzle-orm/d1";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { table as postsTable } from "@/server/posts";

const getLocalPosts = async (): Promise<Array<any>> => {
  const context = getRequestContext();
  const db = drizzle(context.env.D1DATA);

  const results = await db.select().from(postsTable).all();

  return results;
};

const getPosts = async (): Promise<Array<Post>> => {
  const postRequest = await fetch("https://api.tombaker.me/v1/posts");
  if (!postRequest.ok) return [];

  const { data: posts }: SonicResponse<Array<Post>> = await postRequest.json();

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
      {/* TODO: Render paginated list of blog posts */}
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
