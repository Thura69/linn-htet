"use client";

import PDFViewer from "@/components/pdf-viewer";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useMediaQuery } from "react-responsive";
import { MobileMenu } from "@/components/mobile-menu";



export default function Page() {
    const isDesktop = useMediaQuery({
        query: "(min-width: 624px)",
      });
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
     <PDFViewer  fileUrl={"/cv.pdf"} />
      <MobileMenu />
    </ReactLenis>
  );
}
