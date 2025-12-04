import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { InferSelectModel } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import Link from "next/link";
import { table as postsTable } from "@/server/posts";

type Post = InferSelectModel<typeof postsTable>;

const getPost = async (id: string): Promise<Post | null> => {
  const context = getCloudflareContext();
  const db = drizzle(context.env.D1DATA);

  const post = await db.select().from(postsTable).get({ id });

  return post ?? null;
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const post = await getPost((await params).id);

  if (!post) {
    return (
      <div>
        <h1 className="mb-4 border-b border-gray-100 dark:border-gray-600 pb-6">Post not found</h1>
        <Link href={"/blog"}>Return to Blog page</Link>
      </div>
    );
  }
  return (
    <div>
      <h1 className="mb-4 border-b border-gray-100 dark:border-gray-600 pb-6">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body ?? <div /> }} />
      <br />
      <Link href={"/blog"}>Return to Blog page</Link>
    </div>
  );
};

export default Page;
