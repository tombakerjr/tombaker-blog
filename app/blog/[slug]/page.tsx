import Link from "next/link";
import { getRequestContext } from "@cloudflare/next-on-pages";

const getPost = async (slug: string): Promise<Post> => {
  const postRequest = await fetch(`https://cat-fact.herokuapp.com/facts/`);
  if (!postRequest.ok) return { id: "-1", title: "Error", content: "Failed to fetch post" };
  const facts: Array<Fact> = await postRequest.json();
  const fact = facts.find((fact) => {
    return fact._id === slug;
  });

  if (!fact) return { id: "-1", title: "Error", content: "Failed to fetch post" };
  const post = { id: fact._id, title: fact.user, content: fact.text };
  return post;
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const myKv = getRequestContext().env.KVDATA;
  const kvValue = (await myKv.get(`foobar`)) || false;
  console.log(kvValue);
  const post = await getPost(params.slug);

  return (
    <div>
      <h1 className="mb-4 border-b border-gray-100 dark:border-gray-600 pb-6">{post.title}</h1>
      <p>{post.content}</p>
      <br />
      <Link href={"/blog"}>Return to Blog page</Link>
    </div>
  );
};

export default Page;
export const runtime = "edge";
