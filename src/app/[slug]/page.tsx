"use client";

import { getUrl } from "@/lib/urlShortener";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SlugPage() {
  const router = useRouter();
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const redirect = async () => {
      if (slug) {
        const url = await getUrl(slug as string);
        if (url) {
          router.push(url);
        } else {
          alert("Invalid slug");
        }
        setIsLoading(false);
      }
    };

    redirect();
  }, [slug, router]);

  if (!slug || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}
