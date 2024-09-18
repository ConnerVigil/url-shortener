import { v4 as uuidv4 } from "uuid";

export function generateSlug(): string {
  return uuidv4().slice(0, 6);
}

export function saveUrl(slug: string, url: string): boolean {
  const urlMap = JSON.parse(localStorage.getItem("urlMap") || "{}");

  for (const savedSlug in urlMap) {
    if (urlMap[savedSlug] === url) {
      alert("This URL has already been added.");
      return false;
    }
  }

  urlMap[slug] = url;
  localStorage.setItem("urlMap", JSON.stringify(urlMap));
  return true;
}

export function getUrl(slug: string): string | null {
  const urlMap = JSON.parse(localStorage.getItem("urlMap") || "{}");
  return urlMap[slug] || null;
}

export function getUrlMap(): Record<string, string> {
  return JSON.parse(localStorage.getItem("urlMap") || "{}");
}

export function clearUrlMap(): void {
  localStorage.removeItem("urlMap");
}
