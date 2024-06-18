import Link from "next/link";

const getPosts = async (): Promise<Array<Post>> => {
  const postRequest = await fetch(`https://cat-fact.herokuapp.com/facts/`);
  if (!postRequest.ok) return [{ id: "-1", title: "Error", content: "Failed to fetch post" }];
  const facts: Array<Fact> = await postRequest.json();
  const posts: Array<Post> = facts.map((fact) => ({
    id: fact._id,
    title: fact.user,
    content: fact.text,
  }));
  return posts;
};

const Page = async () => {
  // TODO: Implement pagination logic and fetch blog posts
  const posts = await getPosts();

  return (
    <div>
      <h1 className="mb-4 border-b border-gray-100 dark:border-gray-600 pb-6">
        Tom&apos;s Blog (eventually, but just cat facts for now!)
      </h1>
      {/* TODO: Render paginated list of blog posts */}
      {posts.map((post: Post) => (
        <div key={post.id} className="mt-6">
          <Link href={`/blog/${post.id}`}>
            <h2 className="text-xl font-bold">{post.id}</h2>
          </Link>
          <h3 className="text-lg mb-2">User: {post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
