import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const CustomImageLoader = () => {
  const [loading, setLoading] = useState(true);

  const loader = ({
    width,
    quality,
    src,
  }: {
    width: number;
    quality?: number;
    src: string;
  }) => {
    const props = [`w=${width}`];
    if (quality) props.push(`q=${quality}`);
    const queryStr = props.join("&");

    return `http://localhost:3000/api/g64img/${src}?${queryStr}`;
  };

  return (
    <div className="relative w-full h-full">
      <Image
        sizes="10px"
        fill
        priority
        alt="Thumbnail"
        src={"2.jpg"}
        className=""
        loader={({ src }) =>
          `http://localhost:3000/api/g64img/${src}?thumbnail=true`
        }
      />
      <Image
        fill
        alt="kdkd"
        className={cn(
          " transition-opacity duration-1000 ease-in-out",
          loading ? "opacity-0" : "opacity-100"
        )}
        src={"2.jpg"}
        loader={loader}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default CustomImageLoader;
