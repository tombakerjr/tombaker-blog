import Link from "next/link";

// TODO: Switch to pulling data directly from D1
const getPost = async (slug: string): Promise<Post | null> => {
  const postRequest = await fetch(`https://api.tombaker.me/v1/posts/${slug}`);
  if (!postRequest.ok) return null;

  const { data: post }: SonicResponse<Post> = await postRequest.json();

  return post;
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const post = await getPost((await params).slug);

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
export const runtime = "edge";
