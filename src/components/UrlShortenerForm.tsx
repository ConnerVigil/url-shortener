import React from "react";

interface Props {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  url: string;
  setUrl: (url: string) => void;
}

export default function UrlShortenerForm({ handleSubmit, url, setUrl }: Props) {
  return (
    <div>
      <p className="text-sm text-gray-400 mb-6 max-w-lg text-center">
        Please make sure to enter the full URL, including &quot;http://&quot; or
        &quot;https://&quot;. For example:{" "}
        <span className="text-blue-500">https://google.com</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg md:max-w-2xl"
      >
        <input
          type="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="Enter a URL"
          className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:border-blue-500 mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Shorten URL
        </button>
      </form>
    </div>
  );
}
