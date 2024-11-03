export function onRequest(context) {
  const request = modifyRequest(context.request, context.env);
  return fetch(request);
}

function modifyRequest(request, env) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${env.ACCOUNT_ID}/ai/run/@cf/black-forest-labs/flux-1-schnell`;
  const headers = new Headers(request.headers);
  headers.set("Authorization", `Bearer ${env.API_BEAR_TOKEN}`);
  const modifiedRequest = new Request(url, {
    body: request.body,
    method: request.method,
    redirect: request.redirect,
    headers,
  });
  return modifiedRequest;
}
