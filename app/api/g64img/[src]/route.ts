import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { readFileSync, writeFileSync } from "fs";
import sharp from "sharp";

export async function GET(
  request: NextRequest,
  { params }: { params: { src: string } }
) {
  const { src } = params;
  const { searchParams } = new URL(request.url);
  const width = searchParams.get("w");
  const quality = searchParams.get("q");
  const thumbnail = searchParams.get("thumbnail");





  const basename = path.basename(src, path.extname(src));

  if (thumbnail) {
    const route = path.join(__dirname, `${basename}-thumbnail.jpg`);

    const thumbnailImage = readFileSync(route);

    return new NextResponse(thumbnailImage, {
      headers: {
        "Content-Type": "image/jpeg", // Adjust the content type based on the image format
      },
    });
  }

  const imagePath = path.join(__dirname, src);
  const originalImage = readFileSync(imagePath);

  const resizeImageBuffer = await sharp(originalImage)
    .png({ quality: quality ? Number(quality) : 75 })
    .resize(Number(width))
    .toBuffer();

    return new NextResponse(resizeImageBuffer, {
        headers: {
          "Content-Type": "image/jpeg", // Adjust the content type based on the image format
        },
      });
}

export async function POST(c: NextRequest) {
  const formData = await c.formData();
  const img = formData.get("image");

  if (!img || !(img instanceof Blob)) {
    return NextResponse.json(
      { error: "No image file uploaded" },
      { status: 400 }
    );
  }

  const buffer = await img.arrayBuffer();
  const filename = img.name || "image";

  const fileExtension = path.extname(filename);
  const baseFileName = path.basename(filename, fileExtension);

  const originalPath = path.join(__dirname, `${baseFileName}${fileExtension}`);

  writeFileSync(originalPath, Buffer.from(buffer));

  const thumbnailBuffer = await sharp(Buffer.from(buffer))
    .blur(2)
    .resize(10)
    .toBuffer();

  const thumbnailPath = path.join(__dirname, `${baseFileName}-thumbnail.jpg`);

  writeFileSync(thumbnailPath, thumbnailBuffer);

  return NextResponse.json({ message: "Success" }, { status: 200 });
}
