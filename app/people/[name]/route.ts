type Params = {
  name: string;
};

export async function GET(request: Request, context: { params: Params }) {
  console.log(context.params);
  return new Response(`Hello, ${context.params.name}!`, {
    headers: { "content-type": "text/plain" },
  });
}
