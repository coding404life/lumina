import { getUploadAuthParams } from "@imagekit/next/server";
import { NextResponse } from "next/server";
import config from "@/lib/config";

const {
  env: {
    imagekit: { publicKey, privateKey },
  },
} = config;

export async function GET() {
  const { token, expire, signature } = getUploadAuthParams({
    privateKey: privateKey as string,
    publicKey: publicKey as string,
    // Optional: expire time in seconds (max 1 hour)
    // expire: 30 * 60,
  });

  return NextResponse.json({
    token,
    expire,
    signature,
    publicKey,
  });
}
