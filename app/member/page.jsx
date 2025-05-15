"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Member() {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("auth") !== "yes") router.replace("/login");
  }, [router]);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">會員中心（示範）</h1>
    </div>
  );
}
