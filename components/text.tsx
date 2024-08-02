import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type TextProps = {
  varient: "primary" | "secondary";
  children: React.ReactNode;
  active?: boolean;
  link?: boolean;
  url?:string
};

export const Text: React.FC<TextProps> = ({ varient, children, link,url,active }) => {
  return (
    <div
      className={cn(
        "text-[16px] font-[500] animate-text-fade",
        varient === "primary" && "text-textPrimary  ",
        varient === "secondary" && "text-textSecondary "
      )}
    >
      {link ? (
        <p className={cn('cursor-pointer  duration-500 ',active && ' text-textPrimary ')}>
          {" "}
          {children}
        </p>
      ) : (
        <Link
          className={cn('cursor-pointer  duration-500 ',active && 'text-textPrimary')}
          href={`${url}`}
        >
          {children}
        </Link>
      )}
    </div>
  );
};
