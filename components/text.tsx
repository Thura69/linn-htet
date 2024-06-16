import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type TextProps = {
  varient: "primary" | "secondary";
  children: React.ReactNode;
  active?: boolean;
  link?: boolean;
};

export const Text: React.FC<TextProps> = ({ varient, children, link,active }) => {
  return (
    <div
      className={cn(
        "text-[16px] font-[500] animate-text-fade",
        varient === "primary" && "text-textPrimary ",
        varient === "secondary" && "text-textSecondary"
      )}
    >
      {link ? (
        <p className={cn('cursor-pointer  duration-500 hover:text-textSecondary',active && ' text-textPrimary ')}>
          {" "}
          {children}
        </p>
      ) : (
        <Link
          className={cn('cursor-pointer duration-500 hover:text-textSecondary',active && 'text-textPrimary')}
          href={"/"}
        >
          {children}
        </Link>
      )}
    </div>
  );
};
