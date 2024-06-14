import Link from "next/link";

const getPosts = async (): Promise<Array<Post>> => {
  const postRequest = await fetch(`https://cat-fact.herokuapp.com/facts/`);
  if (!postRequest.ok)
    return [{ id: "-1", title: "Error", content: "Failed to fetch post" }];
  const facts = await postRequest.json();
  const posts: Array<Post> = facts.map((fact: Fact) => ({
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
      <h1 className="text-3xl font-bold underline">
        Tom&apos;s Blog (eventually)
      </h1>
      {/* TODO: Render paginated list of blog posts */}
      {posts.map((post: Post) => (
        <div key={post.id}>
          <Link href={`/blog/${post.id}`}>
            <h2>{post.id}</h2>
          </Link>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
