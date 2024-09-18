"use client";

import UrlListRenderer from "@/components/UrlListRenderer";
import UrlShortenerForm from "@/components/UrlShortenerForm";
import { generateSlug, saveUrl, getUrlMap } from "@/lib/urlShortener";
import { useState, useEffect } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [urlList, setUrlList] = useState<{ slug: string; url: string }[]>([]);

  useEffect(() => {
    const urlMap = getUrlMap();
    const entries = Object.entries(urlMap).map(([slug, url]) => ({
      slug,
      url,
    }));
    setUrlList(entries);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const slug = generateSlug();
    try {
      const saved = saveUrl(slug, url);
      if (saved) {
        setUrlList((prevList) => [...prevList, { slug, url }]);
        setUrl("");
      }
    } catch (error) {
      console.error("Error saving URL:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4 md:p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">URL Shortener</h1>
      <UrlShortenerForm handleSubmit={handleSubmit} url={url} setUrl={setUrl} />
      <UrlListRenderer urlList={urlList} setUrlList={setUrlList} />
    </div>
  );
}
