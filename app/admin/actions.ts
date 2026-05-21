"use server";

import { redirect } from "next/navigation";
import { clearAdminSession, createAdminSession } from "@/lib/admin-auth";

export async function loginAdmin(formData: FormData) {
  const password = formData.get("password");
  const ok = await createAdminSession(typeof password === "string" ? password : "");

  if (!ok) {
    redirect("/admin?error=1");
  }

  redirect("/admin");
}

export async function logoutAdmin() {
  await clearAdminSession();
  redirect("/admin");
}
