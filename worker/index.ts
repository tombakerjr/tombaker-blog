import { WorkerEntrypoint } from "cloudflare:workers";

interface Env {
  ASSETS?: { fetch(request: Request): Promise<Response> };
}

export default class Worker extends WorkerEntrypoint<Env> {
  async fetch(request: Request): Promise<Response> {
    // Example: serve a static asset
    if (this.env.ASSETS) {
      // This will serve static assets automatically
      return this.env.ASSETS.fetch(request);
    }
    return new Response("Hello from Cloudflare Worker!");
  }
}
