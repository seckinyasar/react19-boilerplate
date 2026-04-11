/** //? OAuth APIs often return thumbnail URLs (e.g. Google =s96-c).Bump to a large edge size so scaling stays sharp. */
export function highResAvatarUrl(url: string): string {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();

    if (host.includes("googleusercontent.com")) {
      return url.replace(/=s\d+-c/gi, "=s2048-c");
    }

    if (host === "avatars.githubusercontent.com") {
      parsed.searchParams.set("s", "460");
      return parsed.toString();
    }
  } catch {
    return url;
  }
  return url;
}
