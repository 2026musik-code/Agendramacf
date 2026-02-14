export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Routing sederhana
    if (url.pathname === "/") {
      return new Response("Halo, ini clone Cloudflare Worker!", {
        headers: { "content-type": "text/plain" },
      });
    }

    if (url.pathname === "/json") {
      return new Response(JSON.stringify({ message: "Hello from Worker Clone" }), {
        headers: { "content-type": "application/json" },
      });
    }

    // Proxy contoh
    if (url.pathname.startsWith("/proxy")) {
      const target = "https://httpbin.org/get";
      const resp = await fetch(target);
      return resp;
    }

    return new Response("404 Not Found", { status: 404 });
  },
};