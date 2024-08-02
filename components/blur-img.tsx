
import React from "react";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";
import { projects } from "./projects/data";
import Image from 'next/image';



type BlurImageType =  {
    imgUrl:any
}

export const BlurImage:React.FC<BlurImageType> = async ({imgUrl}) => {

  const src = `/images/${imgUrl}`;

//   const buffer = await fs.readFile(`../public${src}`);

  console.log("))))))))")
  console.log(imgUrl)
  console.log("))))))))")


//   const { base64 } = await getPlaiceholder(buffer);

  return (<div></div>
    // <Image
    //   src={base64}
    //   className=" cursor-pointer "
    //   blurDataURL={`/images/${projects[1].src}`}
    //   placeholder="blur"
    //   fill={true}
    //   alt={"image"}
    // />
  );
};
