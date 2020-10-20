import type { Req } from "../types";
export const bookApiUrl = "http://localhost:3000/books";

export const httpGet = (path: string): Promise<Req> => {
  return req(path);
};

export const httpPost = (path: string, data: {} | []): Promise<Req> =>
  req(path, "POST", data);

export const httpPut = (path: string, data: {} | []): Promise<Req> =>
  req(path, "PUT", data);

const req = async (path: string, method = "GET", data?: {} | []) => {
  const res = await fetch(bookApiUrl + path, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data && JSON.stringify(data),
  });
  const json = await res.json();
  return { ok: res.ok, data: json };
};
