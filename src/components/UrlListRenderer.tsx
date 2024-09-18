import { clearUrlMap } from "@/lib/urlShortener";
import React from "react";

interface Props {
  urlList: { slug: string; url: string }[];
  setUrlList: (urlList: { slug: string; url: string }[]) => void;
}

export default function UrlListRenderer({ urlList, setUrlList }: Props) {
  const clearAllUrls = () => {
    clearUrlMap();
    setUrlList([]);
  };

  return (
    <div className="mt-6 w-full max-w-lg md:max-w-2xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">
        All URLs
      </h2>
      {urlList.length > 0 ? (
        <>
          <ul className="space-y-2">
            {urlList.map(({ slug, url }) => (
              <li
                key={slug}
                className="bg-white p-4 rounded-lg shadow-sm text-black flex flex-col md:flex-row md:justify-between space-y-2 md:space-y-0"
              >
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">
                    Original URL:
                  </span>
                  <a href={url} className="text-blue-500 underline break-all">
                    {url}
                  </a>
                </div>
                <div className="flex flex-col md:ml-4">
                  <span className="font-semibold text-gray-700">
                    Shortened URL:
                  </span>
                  <a
                    href={`http://localhost:3000/${slug}`}
                    className="text-blue-500 underline break-all"
                  >
                    {`http://localhost:3000/${slug}`}
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={clearAllUrls}
            className="mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 w-full md:w-auto"
          >
            Clear All URLs
          </button>
        </>
      ) : (
        <p className="text-gray-600">No URLs have been shortened yet.</p>
      )}
    </div>
  );
}
