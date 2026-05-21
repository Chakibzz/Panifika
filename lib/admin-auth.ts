import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const cookieName = "panifika_admin";

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "";
}

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || "";
}

function sign(value: string) {
  return createHmac("sha256", getSessionSecret()).update(value).digest("hex");
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

export async function isAdminAuthenticated() {
  const password = getAdminPassword();
  const secret = getSessionSecret();

  if (!password || !secret) {
    return false;
  }

  const store = await cookies();
  const session = store.get(cookieName)?.value;

  return Boolean(session && safeEqual(session, sign(password)));
}

export async function createAdminSession(password: string) {
  const adminPassword = getAdminPassword();

  if (!adminPassword || !safeEqual(password, adminPassword)) {
    return false;
  }

  const store = await cookies();
  store.set(cookieName, sign(adminPassword), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8
  });

  return true;
}

export async function clearAdminSession() {
  const store = await cookies();
  store.delete(cookieName);
}
