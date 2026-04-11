import type { CollectionEntry } from "astro:content";

const BASE_URL = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL.substring(0, import.meta.env.BASE_URL.length - 1)
  : import.meta.env.BASE_URL;

export const generateURL = (
  path: string,
  base?: string | URL,
  preserveTrailingSlash = false
) => {
  let pathname = preserveTrailingSlash
    ? `${BASE_URL}/${trimSlash(path, true)}`
    : `${BASE_URL}/${trimSlash(path)}`;
  if (base) {
    return new URL(pathname, base);
  }
  return pathname;
};

export const trimSlash = (path: string, preserveTrailingSlash = false) => {
  let res = path;
  if (!preserveTrailingSlash && res.endsWith("/")) {
    res = res.substring(0, res.length - 1);
  }
  if (res.startsWith("/")) {
    res = res.substring(1);
  }
  return res;
};

export const pathEqual = (a: string, b: string) => {
  return trimSlash(a) === trimSlash(b);
};

export function encodeTag(tag: string) {
  return tag
    .replace(/\//g, "%2F") // 确保 / 被正确编码
    .replace(/\s+/g, "-"); // 空格转换为 -
}

export function decodeTag(encodedTag: string) {
  return decodeURIComponent(encodedTag);
}

export const getUniqueTags = (posts: CollectionEntry<"blog">[]) => {
  const tags: string[] = posts
    .filter(post => !post.data.hide)
    .flatMap(post => post.data.tags)
    // 进行url编码
    .map(tag => encodeTag(tag));
  return [...new Set(tags)];
};

export const getPostsByTag = (
  posts: CollectionEntry<"blog">[],
  tag: string
) => {
  return posts.filter(
    post => !post.data.hide && post.data.tags.includes(decodeTag(tag))
  );
};

export const getGroup = (id: string): string | null => {
  const parts = id.split("/");
  return parts.length > 1 ? parts[0] : null;
};

export const formatGroupName = (dir: string): string => {
  return dir
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const groupPosts = <T extends { id: string }>(posts: T[]) => {
  const grouped = new Map<string | null, T[]>();
  for (const post of posts) {
    const group = getGroup(post.id);
    if (!grouped.has(group)) grouped.set(group, []);
    grouped.get(group)!.push(post);
  }
  return grouped;
};
